--[[
--Created Date: Friday July 28th 2023 12:03:40 am CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Sunday July 30th 2023 3:11:33 am CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--// Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

--// Modules
-- local Table = require(ReplicatedStorage.Util.Table)
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
local VisualEffects = script.VisualEffects

function RenderController:KnitInit()
	self.ActiveAnimals = {}
	self.DistanceCaches = {}
end

function RenderController:KnitStart()
	-------------Variables-----------
	self.GameService = Knit.GetService("GameService")
	-------------Variables-----------
	-------------Classes-------------

	-------------Classes-------------
	-----------Initialize------------
	self.GameService.CreateVFX:Connect(function(Info: { Type: string, id: string })
		local CurrentEffectsModule = VisualEffects:FindFirstChild(Info.Type)
		local ActiveAnimal = self.ActiveAnimals[Info.id]

		if not CurrentEffectsModule or not ActiveAnimal then
			return
		end

		local Effects = require(CurrentEffectsModule)
		Effects.Visualize(ActiveAnimal)
	end)
	self.GameService.ClientRender:Connect(function(Info: EntityInfo)
		self:SpawnAnimal(Info)
	end)

	self:Updater()
	-----------Initialize------------
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

	local Animal: Model & { HumanoidRootPart: BasePart, Humanoid: Humanoid } = Animals[Info.AnimalType]:Clone()
	Animal.HumanoidRootPart.Anchored = true
	Animal.HumanoidRootPart.CanCollide = false
	Animal.Humanoid:Destroy()

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
end

return RenderController
