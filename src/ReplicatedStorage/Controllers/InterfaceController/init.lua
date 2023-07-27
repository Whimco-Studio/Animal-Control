--// types
type Character = Model & {
	HumanoidRootPart: MeshPart,
}

--// Services
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

--// Modules
local Feel = require(ReplicatedStorage.Modules.Feel)
local Tween = Feel.Tween

--// Knit
local Knit = require(ReplicatedStorage.Packages.Knit)

--// Interface
-- local Interface = require(ReplicatedStorage.Interface)

--// Controller
local InterfaceController = Knit.CreateController({ Name = "InterfaceController" })

--// Variables

--// local Functions
local function round(num)
	return math.floor(((num * 100) + 0.5)) / 100
end

function InterfaceController:KnitInit() end

function InterfaceController:KnitStart()
	-------------Variables-----------
	-- Interface.new(Players.LocalPlayer.PlayerGui)
	-------------Variables-----------
	-------------Classes-------------

	-------------Classes-------------
	-----------Initialize------------
	self:Signals()

	-----------Initialize------------
end

function InterfaceController:Signals() -- For Decouppling
end

return InterfaceController
