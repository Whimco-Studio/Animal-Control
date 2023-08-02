--// types
type Character = Model & {
	HumanoidRootPart: MeshPart,
}

--// Services
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

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
		task.wait(5)
		self.gui:mountScreen("HeadUserDisplay")
	end)
end

function InterfaceController:KnitStart()
	-------------Variables-----------

	-------------Variables-----------
	-------------Classes-------------

	-------------Classes-------------
	-----------Initialize------------
	self:Signals()
	-----------Initialize------------
end

function InterfaceController:Signals() -- For Decouppling
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
end

return InterfaceController
