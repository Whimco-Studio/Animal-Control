--[[
Quirkymal

    A short description of the module.

SYNOPSIS

    -- Lua code that showcases an overview of the API.
    local foobar = Quirkymal.TopLevel('foo')
    print(foobar.Thing)

DESCRIPTION

    A detailed description of the module.

API

    -- Describes each API item using Luau type declarations.

    -- Top-level functions use the function declaration syntax.
    function ModuleName.TopLevel(thing: string): Foobar

    -- A description of Foobar.
    type Foobar = {

        -- A description of the Thing member.
        Thing: string,

        -- Each distinct item in the API is separated by \n\n.
        Member: string,

    }
]]

-- Implementation of Quirkymal.

--// Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")

--// Modules
local Animations = require(ReplicatedStorage.Config.Quirkymals.Animations)

--// Class
local Quirkymal = {}
Quirkymal.__index = Quirkymal

function Quirkymal.new(Character: Model)
	local info = {
		Name = Character.Name,
		Character = Character,
		Connections = {},
	}
	setmetatable(info, Quirkymal)
	info:Init()

	return info
end

function Quirkymal:Init()
	local Character: Model = self.Character

	self.Connections["Destroying"] = Character.Destroying:Connect(function()
		self:Destroy()
	end)
end

function Quirkymal:PlayAnimationOnce(_Animation: string, Loop: boolean)
	local Character = self.Character
	local AnimationSet = Animations[self.Name]
	local AnimationID = "rbxassetid://" .. (AnimationSet[_Animation] or AnimationSet["Spin"])
	local Animation = Instance.new("Animation")
	Animation.AnimationId = AnimationID

	local Animator: Animator = Character:FindFirstChild("Animator", true) or Instance.new("Animator")
	Animator.Parent = Character:FindFirstChild("AnimationController", true)
		or Character:FindFirstChild("Humanoid", true)

	if Animator then
		local Track = Animator:LoadAnimation(Animation)
		Track.Looped = Loop or false

		Track:Play()
	end
end

function Quirkymal:Disconnect()
	for _, c: RBXScriptConnection in pairs(self.Connections) do
		c:Disconnect()
	end
end

function Quirkymal:Destroy()
	self:Disconnect()

	setmetatable(self, nil)
	table.clear(self)
	table.freeze(self)
end

return Quirkymal
