--[[
--Created Date: Friday July 28th 2023 12:03:40 am CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Friday August 4th 2023 1:47:55 pm CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--// Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

--// Modules
-- local Table = require(ReplicatedStorage.Util.Table)
local Binds = require(ReplicatedStorage.Config.Bindables)
local Settings = require(ReplicatedStorage.Config.Settings)

--// Knit
local Knit = require(ReplicatedStorage.Packages.Knit)

--// Controller
local RenderController = Knit.CreateController({ Name = "RenderController" })

--// Types
type EntityInfo = {
	id: string,
	Map: Folder,
	Body: Vector3,
	AnimalType: string,
	Path: { [number]: BasePart },
}

type Map = Folder & {
	Paths: Folder & { [number]: Model },
	Enemies: Folder & { [number]: Model },
	EndNodes: Folder & { [number]: BasePart },
	SpawnNodes: Folder & { [number]: BasePart },
}

--// Private Functions
local function compareParts(a, b)
	local numA = tonumber(a.Name:match("%d+")) or 0
	local numB = tonumber(b.Name:match("%d+")) or 0
	return numA > numB
end

--// Variables
local Animals = ReplicatedStorage.Animals
local Animations = require(ReplicatedStorage.Config.Quirkymals.Animations)
local VisualEffects = script.VisualEffects

local AnimationCache = {}

function RenderController:KnitInit()
	self.ActiveAnimals = {}
	self.ActiveTowers = {}
	self.DistanceCaches = {}
end

function RenderController:KnitStart()
	-------------Variables-----------
	self.GameService = Knit.GetService("GameService")
	-------------Variables-----------
	-------------Classes-------------

	-------------Classes-------------
	-----------Initialize------------
	self.GameService.CreateVFX:Connect(function(Info: { Type: string, id: string, value: number })
		self:CreateVFX(Info)
	end)
	self.GameService.ClientUpdater:Connect(function(Info: EntityInfo)
		if Info.Type == "Animal" then
			self:SpawnAnimal(Info.Payload)
		end
	end)

	Binds.Game.RemoveAnimal.Event:Connect(function(ID: string)
		local ActiveAnimal: EntityInfo = self.ActiveAnimals[ID]

		if ActiveAnimal then
			ActiveAnimal.Animal:Destroy()
			table.clear(ActiveAnimal)
			self.ActiveAnimals[ID] = nil
		end
	end)

	Binds.Game.TowerCreated.Event:Connect(function(Tower: MeshPart, Id: string, Position: Vector3)
		local TowerBase: MeshPart & { Decal: Decal } = ReplicatedStorage.Assets.TowerBase:Clone()
		TowerBase.CFrame = CFrame.new(Position) * CFrame.new(0, TowerBase.Size.Y / 2, 0)
		TowerBase.Decal.Transparency = 1

		TowerBase.Parent = Tower

		self.ActiveTowers[Id] = {
			Tower = Tower,
			TowerBase = TowerBase,
		}

		self:CreateVFX({
			Type = "Tower",
			TowerBase = TowerBase,
			Action = "TowerCreated",
			Position = Position,
			id = Id,
		})

		-- self:CreateVFX({
		-- 	Type = "Tower",
		-- 	Tower = Tower,
		-- 	Action = "TowerIdle",
		-- 	id = Id,
		-- })
	end)

	self:AnimateTowers()
	self:Updater()
	-----------Initialize------------
end

function RenderController:CreateVFX(Info: { Type: string, id: string, value: number })
	local CurrentEffectsModule = VisualEffects:FindFirstChild(Info.Action)
	local ActiveEntity = self.ActiveAnimals[Info.id] or self.ActiveTowers[Info.id]

	if not CurrentEffectsModule or not ActiveEntity then
		return
	end

	local Effects = require(CurrentEffectsModule)
	Effects.Visualize(ActiveEntity, Info)
end

function RenderController:GetTableFromId(Id: string)
	for i, v in ipairs(self.ActiveAnimals) do
		if v.id == Id then
			return i, v
		end
	end

	return false
end

function RenderController:Updater()
	RunService.Heartbeat:Connect(function(dt)
		for i, v in pairs(self.ActiveAnimals) do
			self:MoveAnimal(dt, v)
		end
	end)
end

function RenderController:MoveAnimal(dt, info: EntityInfo & { Animal: Model & { HumanoidRootPart: BasePart } })
	local Map: Map = info.Map
	local Animal = info.Animal

	local humanoidRootPart = Animal:FindFirstChild("HumanoidRootPart")
	local waypoints = info.Path
	local currentWaypoint: BasePart = waypoints[info.CurrentWaypointIndex]

	if not humanoidRootPart or not currentWaypoint then
		return
	end

	-- Move towards the waypoint
	local NextWaypoint: BasePart = waypoints[info.CurrentWaypointIndex + 1] or Map.EndNodes.EndNode
	local LookAt = CFrame.new(currentWaypoint.Position, NextWaypoint.Position)
		* CFrame.new(0, (Animal.PrimaryPart.Size.Y / 2) - (currentWaypoint.Size.Y / 2), 0)

	local direction = (LookAt.Position - humanoidRootPart.Position).Unit -- Get the direction towards the waypoint
	local displacement = Settings.Speed * dt -- Compute the displacement
	local newPosition = humanoidRootPart.Position + direction * displacement -- Compute the new position

	humanoidRootPart.CFrame = CFrame.new(newPosition, LookAt.Position)
	-- humanoidRootPart.CFrame = humanoidRootPart.CFrame:Lerp(LookAt, dt)

	local DistanceCache = self[info.AnimalType] or -(humanoidRootPart.Size.Y / 2)
	local Bottom = humanoidRootPart.CFrame * CFrame.new(0, -(humanoidRootPart.Size.Y / 2), 0)
	self[info.AnimalType] = DistanceCache

	-- If the Animal is close to the waypoint, advance to the next one
	if (Bottom.Position - currentWaypoint.Position).Magnitude < 1.5 then
		info.CurrentWaypointIndex = info.CurrentWaypointIndex + 1
	end

	-- If the Animal has reached the end of the path, remove it from the active Animals table
	if info.CurrentWaypointIndex > #waypoints then
		if Animal then
			Animal:Destroy()
		end

		self.ActiveAnimals[Animal] = nil
	end
end

function RenderController:SpawnAnimal(Info: EntityInfo)
	local Map: Map = Info.Map
	local EnemyUI: BillboardGui = ReplicatedStorage.Assets.Gui.EnemyUI:Clone()

	local Animal: Model & { HumanoidRootPart: BasePart, Humanoid: Humanoid } = Animals[Info.AnimalType]:Clone()
	Animal.HumanoidRootPart.Anchored = true
	Animal.HumanoidRootPart.CanCollide = false
	Animal.Humanoid:Destroy()

	EnemyUI.Parent = Animal
	EnemyUI.Adornee = Animal.HumanoidRootPart
	EnemyUI.Frame.Label.TextLabel.Text = Animal.Name

	local InitialPoses = Animal:FindFirstChild("InitialPoses")
	if InitialPoses then
		InitialPoses:Destroy()
	end

	local AnimationController = Instance.new("AnimationController")
	AnimationController.Parent = Animal

	local Animator = Instance.new("Animator")
	Animator.Parent = AnimationController

	local Spawn = Info.Body

	Animal:PivotTo(CFrame.new(Spawn) * CFrame.new(0, Animal.PrimaryPart.Size.Y / 2, 0))
	Animal.Parent = Map.Enemies

	Info.Animal = Animal

	self.ActiveAnimals[Info.id] = Info

	local Animation = AnimationCache[Animal.Name] or Instance.new("Animation")

	if not AnimationCache[Animal.Name] then
		AnimationCache[Animal.Name] = Animation
		Animation.AnimationId = "rbxassetid://" .. Animations[Animal.Name].Roll
		Animation.Parent = script
	end

	local WalkAnimationTrack = Animator:LoadAnimation(Animation)
	WalkAnimationTrack.Looped = true
	WalkAnimationTrack:Play()
	WalkAnimationTrack.Priority = Enum.AnimationPriority.Action4
	WalkAnimationTrack:AdjustSpeed(Settings.Speed * 0.05)
end

function RenderController:AnimateTowers()
	local amplitude = 3 -- offset on both sides
	local magnitude = 2.5 -- time

	local selfStartCache = {}
	local startTimeCache = {}

	RunService:BindToRenderStep("TowerFloat", 0, function(deltaTime)
		for id, towerInfo: { Tower: MeshPart } in pairs(self.ActiveTowers) do
			local Tower: MeshPart = towerInfo.Tower
			local StartCF = selfStartCache[id] or Tower.CFrame * CFrame.new(0, 2, 0)

			if not selfStartCache[id] then
				selfStartCache[id] = StartCF
			end

			if not startTimeCache[id] then
				startTimeCache[id] = tick()
			end

			local TargetHeight = amplitude * math.sin((startTimeCache[id] + tick()) * math.pi / magnitude)
			local DesiredCF = StartCF * CFrame.new(0, TargetHeight, 0)
			Tower.CFrame =
				Tower.CFrame:Lerp(DesiredCF * CFrame.fromEulerAnglesXYZ(TargetHeight, 0, TargetHeight), deltaTime)
		end
	end)
end

return RenderController
