--[[
--Created Date: Thursday July 27th 2023 8:11:28 pm CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Friday July 28th 2023 2:03:18 am CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--// Game Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local ServerScriptService = game:GetService("ServerScriptService")

--// Modules
local LevelManager = require(ServerScriptService.Classes.LevelManager)

--// Knit
local Knit = require(ReplicatedStorage.Packages.Knit)

--// Service
local GameService = Knit.CreateService({
	Name = "GameService",
	Client = {
		StartGame = Knit.CreateSignal(),
		SpawnAnimal = Knit.CreateSignal(),
		ClientRender = Knit.CreateSignal(),
	},
})

function GameService:KnitInit()
	self.Levels = {}
end

function GameService:KnitStart()
	-------------Variables-----------
	-------------Variables-----------
	-------------Classes-------------

	-------------Classes-------------
	-----------Initialize------------
	self.Client.SpawnAnimal:Connect(function(Player: Player)
		-- self:Start()
		self:SpawnAnimal(true)
	end)

	self:RegisterLevels()
	self:Start()
	-----------Initialize------------
end

function GameService:SpawnAnimal(All: boolean, TargetLevel: number)
	if All then
		for i, CurrentLevel: typeof(LevelManager.new()) in pairs(self.Levels) do
			CurrentLevel:SpawnAnimal()
		end
	end
end

function GameService:RegisterLevels()
	local Levels: LevelManager.Map = { workspace.Level }

	for i, CurrentLevel in pairs(Levels) do
		self.Levels[i] = LevelManager.new(CurrentLevel, self.Client.ClientRender)
	end
end

function GameService:Start()
	RunService.Heartbeat:Connect(function(deltaTime)
		for i, CurrentLevel: typeof(LevelManager.new()) in pairs(self.Levels) do
			CurrentLevel:Update(deltaTime)
		end
	end)
end

return GameService
