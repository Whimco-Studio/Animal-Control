--// Types
type Character = Model & {
	HumanoidRootPart: MeshPart,
}

type LevelPayload = {
	ActiveAnimals: {},
	AnimalsSpawnedThisWave: number,
	BuildMode: false,
	ClientUpdater: {},
	Connections: {},
	EndNodes: {},
	MaxAnimalsPerWave: {},
	Paths: {},
	Players: {},
	SavedNodes: {},
	SpawnNodes: {},
	TimeLeft: number,
	TowerNodes: {},
	Wave: number,
	WaveStarted: boolean,
	id: string,
}

--// Services
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local UserInputService = game:GetService("UserInputService")

--// Modules
local Bindables = require(ReplicatedStorage.Config.Bindables)
local Feel = require(ReplicatedStorage.Modules.Feel)
local Tween = Feel.Tween

--// Knit
local Knit = require(ReplicatedStorage.Packages.Knit)

--// Interface
local Interface = require(ReplicatedStorage.Interface)

--// Controller
local InterfaceController = Knit.CreateController({ Name = "InterfaceController" })

--// Variables

--// local Functions
local function round(num)
	return math.floor(((num * 100) + 0.5)) / 100
end

function InterfaceController:KnitInit()
	self.gui = Interface.new(Players.LocalPlayer.PlayerGui)
	Players.LocalPlayer.CharacterAdded:Connect(function()
		task.wait(2)
		self.gui:mountScreen("HeadUserDisplay")
	end)
end

function InterfaceController:KnitStart()
	-------------Variables-----------

	self.Camera = Feel.Camera.new()
	self.FreeCamEnabled = false

	UserInputService.InputBegan:Connect(function(input, gameProcessedEvent)
		if gameProcessedEvent then
			return
		end

		if input.KeyCode == Enum.KeyCode.F then
			self:ToggleCamera()
		end
	end)
	-------------Variables-----------
	-------------Classes-------------

	-------------Classes-------------
	-----------Initialize------------
	self:Signals()

	Feel.Wrap.Wrap(workspace.Positioning.Baseplate, BrickColor.random())
	-----------Initialize------------
end

function InterfaceController:ToggleCamera()
	local Player = game.Players.LocalPlayer
	local Character = Player.Character or Player.CharacterAdded:Wait()
	local Root: BasePart = Character.PrimaryPart

	self.FreeCamEnabled = not self.FreeCamEnabled
	self.Camera:Set(self.FreeCamEnabled and "FreeCam" or nil)
	Root.Anchored = self.FreeCamEnabled

	if not self.FreeCamEnabled then
		workspace.CurrentCamera.CameraType = Enum.CameraType.Custom
	end
end

function InterfaceController:Signals() -- For Decouppling
	local GameService = Knit.GetService("GameService")

	local ViewportScreenGUI: ScreenGui = Players.LocalPlayer.PlayerGui:WaitForChild("Viewport")
	local Viewport: ViewportFrame = ViewportScreenGUI.ViewportFrame
	Viewport.CurrentCamera = workspace.CurrentCamera

	local currentTower

	Bindables.Game.TowerInitialized.Event:Connect(function(Item: MeshPart)
		currentTower = Item:Clone()
		currentTower.Parent = Viewport

		RunService:BindToRenderStep("TowerDrag", 0, function(deltaTime)
			currentTower.Size = Item.Size
			currentTower.CFrame = Item.CFrame
		end)
	end)

	Bindables.Game.EndMouseCarry.Event:Connect(function()
		if currentTower then
			currentTower:Destroy()
		end

		RunService:UnbindFromRenderStep("TowerDrag")
	end)

	Bindables.Game.JoinGame.Event:Connect(function()
		GameService.StartLevel:Fire()
	end)

	Bindables.Game.StartWave.Event:Connect(function()
		GameService.ToggleReady:Fire()
	end)

	Bindables.Interface.ToggleCamera.Event:Connect(function()
		self:ToggleCamera()
	end)

	GameService.ClientUpdater:Connect(function(Info)
		if Info.Type == "Level" then
			local Payload: LevelPayload = Info.Payload

			Bindables.Interface.Wave.UpdateWave:Fire("Wave " .. tostring(Payload.Wave))
			Bindables.Interface.Wave.UpdateEntityCount:Fire(
				tostring(Payload.AnimalsSpawnedThisWave) .. " / " .. Payload.MaxAnimalsPerWave[Payload.Wave]
			)
		elseif Info.Type == "Reset" then
			local Payload: LevelPayload = Info.Payload

			print(Payload.AnimalsSpawnedThisWave)

			Bindables.Interface.Wave.ResetWave:Fire()
			Bindables.Interface.Wave.UpdateWave:Fire("Wave " .. tostring(Payload.Wave))
			Bindables.Interface.Wave.UpdateEntityCount:Fire(
				tostring(0) .. " / " .. Payload.MaxAnimalsPerWave[Payload.Wave]
			)
		end
	end)
end

return InterfaceController
