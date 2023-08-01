--[[
--Created Date: Thursday July 27th 2023 8:11:28 pm CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Tuesday August 1st 2023 3:12:52 am CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--// Game Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local ServerScriptService = game:GetService("ServerScriptService")

--// Modules
local LevelManager = require(ServerScriptService.Classes.LevelManager)
local TowersConfig = require(ServerScriptService.Config.Towers)
local Binds = require(ServerScriptService.Config.Binds)

--// Knit
local Knit = require(ReplicatedStorage.Packages.Knit)

--// Service
local GameService = Knit.CreateService({
	Name = "GameService",
	Client = {
		CreateVFX = Knit.CreateSignal(),
		StartGame = Knit.CreateSignal(),
		CreateTower = Knit.CreateSignal(),
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

	Binds.VFX.Event:Connect(function(Info)
		self.Client.CreateVFX:FireAll(Info)
	end)

	self.Client.SpawnAnimal:Connect(function(Player: Player)
		-- self:Start()
		self:SpawnAnimal(true)
	end)

	self.Client.CreateTower:Connect(function(Player: Player, Type: string, Position: Vector3)
		if Position == Vector3.zero then
			return
		end

		local CurrentTower = TowersConfig[Type]
		if CurrentTower then
			self.Levels[1]:AddTower(table.clone(CurrentTower), Position)
		end
	end)

	self:RegisterLevels()
	self:Start()
	self:StartGameClock()
	-----------Initialize------------
end

function GameService:StartGameClock()
	-- Starting time of the timer
	local startTime = os.clock()
	local PassedTime = 0.5

	-- Function to update every frame
	local function onHeartbeat(deltaTime)
		-- Calculate elapsed time
		local elapsedTime = os.clock() - startTime

		-- Towers Update every second
		if elapsedTime % PassedTime < deltaTime then
			for i, Level in ipairs(self.Levels) do
				Level:TowersUpdate()
			end
		end
	end

	-- Connect the function to Heartbeat
	RunService.Heartbeat:Connect(onHeartbeat)
end

function GameService:CreateTower(Player: Player) end

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
