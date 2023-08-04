--[[
--Created Date: Thursday July 27th 2023 8:11:28 pm CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Friday August 4th 2023 1:21:19 pm CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--// Game Services
local HttpService = game:GetService("HttpService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local ServerScriptService = game:GetService("ServerScriptService")

--// Modules
local LevelManager = require(ServerScriptService.Classes.LevelManager)
local TowersConfig = require(ServerScriptService.Config.Towers)
local Settings = require(ReplicatedStorage.Config.Settings)
local Binds = require(ServerScriptService.Config.Binds)

--// Knit
local Knit = require(ReplicatedStorage.Packages.Knit)

--// Service
local GameService = Knit.CreateService({
	Name = "GameService",
	Client = {
		CreateVFX = Knit.CreateSignal(),
		StartGame = Knit.CreateSignal(),
		StartLevel = Knit.CreateSignal(),
		ToggleReady = Knit.CreateSignal(),
		CreateTower = Knit.CreateSignal(),
		SpawnAnimal = Knit.CreateSignal(),
		ClientUpdater = Knit.CreateSignal(),
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

	self.Client.StartLevel:Connect(function(Player: Player)
		self:CreateLevel(Player)
	end)

	self.Client.ToggleReady:Connect(function(Player: Player)
		self:ToggleReady(Player)
	end)

	self.Client.SpawnAnimal:Connect(function(Player: Player)
		-- self:Start()
		self:SpawnAnimal(true)
	end)

	self.Client.CreateTower:Connect(function(...)
		self:CreateTower(...)
	end)

	if Settings.Debug then
		self:RegisterLevels()
	end
	self:Start()
	-----------Initialize------------
end

function GameService:FindPlayerWithinLevels(Player)
	local Found = false
	for Id: string, Level: typeof(LevelManager.new()) in pairs(self.Levels) do
		for index, PlayerInfo in pairs(Level.Players) do
			if PlayerInfo.Player == Player then
				Found = PlayerInfo
			end
		end
	end

	return Found
end

function GameService:ToggleReady(Player: Player)
	local Level: typeof(LevelManager.new()) = self.Levels[Player:GetAttribute("Level")]
	local PlayerInfo = self:FindPlayerWithinLevels(Player)

	if Level then
		Level:PlayerToggleReady(Player)
	else
		error("Level not found")
	end
end

function GameService:CreateLevel(Player: Player)
	local ID = HttpService:GenerateGUID(false)
	local Level = LevelManager.new(ID, workspace.Level, self.Client.ClientUpdater)

	if not self.Levels[ID] then
		self.Levels[ID] = Level
		print(self.Levels[ID])
	end

	if #Level.Players < 4 then
		Player:SetAttribute("Level", ID)
		table.insert(Level.Players, {
			Player = Player,
			Money = 500,
			Ready = false,
		})
		print(Level.Players)
	end
end

function GameService:RegisterLevels()
	local Levels: LevelManager.Map = { workspace.Level }

	for i, CurrentLevel in pairs(Levels) do
		local ID = HttpService:GenerateGUID(false)
		self.Levels[i] = LevelManager.new(ID, CurrentLevel, self.Client.ClientUpdater)
	end
end

function GameService:CreateTower(Player: Player, Type: string, Position: Vector3)
	local Level: typeof(LevelManager.new()) = self.Levels[Player:GetAttribute("Level")]

	if not Level then
		return
	end

	if Position == Vector3.zero then
		return
	end

	local CurrentTower = TowersConfig[Type]
	if CurrentTower then
		Level:AddTower(table.clone(CurrentTower), Position)
	end
end

function GameService:SpawnAnimal(All: boolean, TargetLevel: number)
	if All then
		for i, CurrentLevel: typeof(LevelManager.new()) in pairs(self.Levels) do
			CurrentLevel:SpawnAnimal()
		end
	end
end

function GameService:Start()
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

	RunService.Heartbeat:Connect(function(deltaTime)
		-- onHeartbeat(deltaTime)
		for i, CurrentLevel: typeof(LevelManager.new()) in pairs(self.Levels) do
			if not CurrentLevel.WaveStarted and not CurrentLevel.BuildMode then
				continue
			end

			CurrentLevel:Update(deltaTime)
		end
	end)
end

return GameService
