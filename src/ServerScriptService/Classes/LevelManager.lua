--[[
--Created Date: Thursday July 27th 2023 9:12:25 pm CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Friday August 4th 2023 3:51:44 pm CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--[[
LevelManager

    A short description of the module.

SYNOPSIS

    -- Lua code that showcases an overview of the API.
    local foobar = LevelManager.TopLevel('foo')
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

-- Implementation of LevelManager.

--// Services
local HttpService = game:GetService("HttpService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local ServerScriptService = game:GetService("ServerScriptService")
local ServerStorage = game:GetService("ServerStorage")

--// Modules
local Knit = require(ReplicatedStorage.Packages.Knit)
local Binds = require(ServerScriptService.Config.Binds)
local Towers = require(ServerScriptService.Config.Towers)
local Settings = require(ReplicatedStorage.Config.Settings)

--// Class
local LevelManager = {}
LevelManager.__index = LevelManager

--// Types
export type Map = Folder & {
	Paths: Folder & { [number]: Model },
	Enemies: Folder & { [number]: Model },
	EndNodes: Folder & { [number]: BasePart },
	SpawnNodes: Folder & { [number]: BasePart },
}

--// Functions
-- Custom comparison function to extract numerical part from names and compare them
local function compareParts(a, b)
	local numA = tonumber(a.Name:match("%d+")) or 0
	local numB = tonumber(b.Name:match("%d+")) or 0
	return numA > numB
end

-- Constructor for the LevelManager class
function LevelManager.new(id: string, Map: Map, ClientUpdater: typeof(Knit.CreateSignal()))
	-- Create a new LevelManager with these properties
	local info = {
		WaveStarted = false, -- Initially, no wave has started
		BuildMode = false, -- The game is not in build mode

		id = id, -- Unique id for the level
		Map = Map, -- The Map object for this level
		ClientUpdater = ClientUpdater, -- The function to update clients

		Wave = 1, -- Start at wave 1
		TimeLeft = 30, -- Time left for the wave, initially 30 seconds
		AnimalsSpawnedThisWave = 0, -- No animals spawned yet

		Players = {}, -- List of players in this level
		EndNodes = {}, -- List of end nodes in this level
		TowerNodes = {}, -- List of towers in this level
		SpawnNodes = {}, -- List of spawn nodes in this level
		SavedNodes = {}, -- List of saved nodes in this level
		Connections = {}, -- List of connections in this level
		ActiveAnimals = {}, -- List of active animals in this level
		MaxAnimalsPerWave = { 10, 20, 30, 40 }, -- Maximum number of animals per wave
	}

	-- Set the metatable of info to LevelManager and initialize it
	setmetatable(info, LevelManager):Init()
	-- Return the newly created LevelManager
	return info
end

-- Method of LevelManager that registers a level
function LevelManager:RegisterLevel()
	-- Retrieve the Map object
	local Map: Map = self.Map
	-- Define the target names that should be registered
	local targetNames = { "SpawnNodes", "Paths" }

	-- Loop through all children of the map
	for i, v in ipairs(Map:GetChildren()) do
		-- If the child's name is not in the target names, skip this iteration
		if not table.find(targetNames, v.Name) then
			continue
		end

		-- Retrieve the children of the target node
		local Children = v:GetChildren()
		-- Sort the children by their names
		table.sort(Children, function(a, b)
			return a.Name < b.Name
		end)
		-- Save the sorted children to the corresponding property of LevelManager
		self[v.Name] = Children
	end
end

-- Initialization method for the LevelManager
function LevelManager:Init()
	-- Retrieve the Map object
	local Map: Map = self.Map

	-- Register the level
	self:RegisterLevel()
end

-- Method of the LevelManager class that spawns an animal
function LevelManager:SpawnAnimal()
	-- Retrieve the Map object
	local Map: Map = self.Map

	-- Retrieve all enemy animals from the ServerStorage
	local Animals = ServerStorage.Enemies:GetChildren()

	-- Randomly select a node from the list of spawn nodes
	local Node = math.random(1, #self.SpawnNodes)
	-- Randomly select an animal type
	local Animal = Animals[math.random(1, #Animals)]
	-- Generate a unique ID for the new animal
	local id = HttpService:GenerateGUID(false)

	-- Retrieve the selected spawn node
	local Spawn = self.SpawnNodes[Node]
	-- Retrieve the path associated with the selected spawn node
	local Path = self.Paths[Node]:GetChildren()
	-- Sort the path waypoints
	table.sort(Path, compareParts)

	-- Construct the new animal information
	local Info = {
		id = id,
		Path = Path,
		Health = 100,
		Body = Spawn.Position,
		CurrentWaypointIndex = 1,
	}

	-- If the game is in debug mode, create a temporary visual representation for the new animal
	if Settings.Debug then
		local tempBody = Instance.new("Part")
		tempBody.Size = Vector3.one * 2
		tempBody.CanCollide = false
		tempBody.Anchored = true
		tempBody.Parent = Map.Enemies
		tempBody.CFrame = Spawn.CFrame

		-- Assign the temporary visual representation to the animal information
		Info.tempBody = tempBody
	end

	-- Add the new animal to the list of active animals
	table.insert(self.ActiveAnimals, Info)

	Info.Map = Map
	Info.AnimalType = Animal.Name

	-- Notify all clients about the new animal
	self.ClientUpdater:FireAll({
		Type = "Animal",
		Payload = Info,
	})
end

-- Method of the LevelManager class that adds a tower
function LevelManager:AddTower(Info: Towers.TowerStats, Position: Vector3)
	-- Retrieve the list of tower nodes
	local TowerNodes = self.TowerNodes

	-- Generate a unique ID for the new tower
	Info.Id = HttpService:GenerateGUID(false)
	-- Setting the Last Fire time for attack speed
	Info.lastAttack = tick()
	-- Set the position of the new tower
	Info.Position = Position
	-- Add the new tower to the list of tower nodestable.insert(TowerNodes, Info)
	table.insert(TowerNodes, Info)
end

-- Method of the LevelManager class that scans the area around a tower
function LevelManager:ScanTowerArea(Tower: Towers.TowerStats)
	if (tick() - Tower.lastAttack) < Tower.fireRate then
		return
	end

	-- Get the position of the tower
	local Start = Tower.Position
	-- Calculate the radius of the tower's range, multiplied by 5
	local Radius = Tower.range * 5
	-- Get the damage that the tower can do
	local Damage = Tower.damage

	-- Loop through all active animals
	for _, Animal in ipairs(self.ActiveAnimals) do
		-- Calculate the distance between the tower and the current animal
		local dist = (Start - Animal.Body).Magnitude
		-- If the animal is within the tower's radius
		if dist <= Radius then
			-- Resetting the Tower lastAttack
			Tower.lastAttack = tick()
			-- Decrease the animal's health by the tower's damage
			Animal.Health = Animal.Health - Damage
			-- Trigger a visual effect (VFX) for enemy damage
			Binds.VFX:Fire({
				Type = "Enemy",
				Action = "Damage",
				id = Animal.id,
				-- The damage value is the current health of the animal divided by 100
				Value = Animal.Health / 100,
			})
			-- If the animal's health drops to 0 or below
			if Animal.Health <= 0 then
				-- Remove the animal
				self:RemoveAnimal(Animal.id)
			end
		end
	end
end

-- Method of the LevelManager class that updates the towers
function LevelManager:TowersUpdate()
	-- Get all tower nodes
	local TowerNodes: { [number]: Towers.TowerStats } = self.TowerNodes

	-- Loop through each tower node
	for index, Tower: Towers.TowerStats in ipairs(TowerNodes) do
		-- Scan the area around the current tower
		self:ScanTowerArea(Tower)
	end
end

-- This is a method of the LevelManager class
function LevelManager:RemoveAnimal(Id: string)
	-- Loop through the array 'ActiveAnimals' which is a property of LevelManager
	-- 'i' is the index of the animal in the array, 'Animal' is the actual animal object
	for i, Animal in ipairs(self.ActiveAnimals) do
		-- If the 'id' property of the current animal object matches the Id parameter passed into the function
		if Animal.id == Id then
			-- If the animal has a 'tempBody' (temporary visual representation), it's destroyed
			if Animal.tempBody then
				Animal.tempBody:Destroy()
			end
			-- The animal is removed from the 'ActiveAnimals' array
			table.remove(self.ActiveAnimals, i)
			-- Updating the clients with all the Level information
			self.ClientUpdater:FireAll({
				Type = "Level",
				Payload = self,
			})
			self:WaveEndedSafeguard()
			-- Break the loop as the matching animal is found and removed
			break
		end
	end
end

-- This is a method of the LevelManager class
function LevelManager:GetTableFromId(Id: string)
	-- Loop through the array 'ActiveAnimals' which is a property of LevelManager
	-- 'i' represents the index of each item, 'v' is the value (or the animal object in this case)
	for i, v in ipairs(self.ActiveAnimals) do
		-- If the 'id' property of the current animal object matches the Id parameter passed into the function
		if v.id == Id then
			-- Return the index and the animal object
			return i, v
		end
	end

	-- If no match is found after going through the entire array, return false
	return false
end

function LevelManager:MoveAnimal(dt, info)
	local Map: Map = self.Map
	local waypoints = info.Path
	local currentWaypoint: BasePart = waypoints[info.CurrentWaypointIndex]

	if not info or not currentWaypoint then
		return
	end

	-- Move towards the waypoint
	local NextWaypoint: BasePart = waypoints[info.CurrentWaypointIndex + 1] or Map.EndNodes.EndNode
	local LookAt = CFrame.new(currentWaypoint.Position, NextWaypoint.Position)
		* CFrame.new(0, -currentWaypoint.Size.Y / 2, 0)

	-- Compute direction, displacement and new position
	local direction = (LookAt.Position - info.Body).Unit
	local displacement = Settings.Speed * dt
	local newPosition = info.Body + direction * displacement

	-- Use newPosition instead of Lerp
	info.Body = newPosition

	if Settings.Debug then
		-- Use newPosition instead of Lerp
		info.tempBody.CFrame = CFrame.new(newPosition, LookAt.LookVector)
	end

	-- If the animal is close to the waypoint, advance to the next one
	if (info.Body - currentWaypoint.Position).Magnitude < 1 then
		info.CurrentWaypointIndex = info.CurrentWaypointIndex + 1
	end

	-- If the animal has reached the end of the path, remove it from the active animals table
	if info.CurrentWaypointIndex > #waypoints then
		local InfoTableFromActiveAnimals, Table = self:GetTableFromId(info.id)
		if InfoTableFromActiveAnimals then
			local tB = Table.tempBody
			if tB then
				tB:Destroy()
			end

			self:RemoveAnimal(info.id)
		end
	end
end

function LevelManager:ResetPlayersReadyToggle()
	for _, PlayerInfo in pairs(self.Players) do
		PlayerInfo.Ready = false
	end
end

function LevelManager:WaveEndedSafeguard()
	local MaxEntitySpawnedCountReached = self.AnimalsSpawnedThisWave == self.MaxAnimalsPerWave[self.Wave]
	local AllAnimalsRemoved = #self.ActiveAnimals == 0
	if MaxEntitySpawnedCountReached and AllAnimalsRemoved then
		self.WaveStarted = false
		self.Wave += 1

		self:ResetPlayersReadyToggle()

		if self.Wave > 3 then
			self.Wave = 1
		end

		self.AnimalsSpawnedThisWave = 0

		self.ClientUpdater:FireAll({
			Type = "Reset",
			Payload = self,
		})
	end
end

function LevelManager:PlayerToggleReady(Player: Player)
	local AllReady = true
	for i, PlayerInfo in pairs(self.Players) do
		if PlayerInfo.Player == Player then
			PlayerInfo.Ready = not PlayerInfo.Ready
		end

		if not PlayerInfo.Ready then
			AllReady = false
		end
	end

	self.WaveStarted = AllReady

	print("Everyone Ready", self.WaveStarted)
end

-- Track the elapsed time since the last spawn
local spawnCounter = 0
local spawnInterval = 2.5 -- Change this value to control the spawn rate

function LevelManager:Update(dt: number)
	for animal, info in ipairs(self.ActiveAnimals) do
		self:MoveAnimal(dt, info)
	end

	self:TowersUpdate()

	-- When WaveStarted is true, start spawning animals

	if self.WaveStarted then
		-- Check if the number of spawned animals is less than the maximum allowed for the current wave
		if self.AnimalsSpawnedThisWave < self.MaxAnimalsPerWave[self.Wave] then
			spawnCounter = spawnCounter + dt
			if spawnCounter >= spawnInterval then
				self:SpawnAnimal()
				spawnCounter = 0
				-- Increase the count of animals spawned this wave
				self.AnimalsSpawnedThisWave += 1
				self.ClientUpdater:FireAll({
					Type = "Level",
					Payload = self,
				})
			end
		end
	end
end

function LevelManager:Disconnect()
	for _, c: RBXScriptConnection in ipairs(self.Connections) do
		c:Disconnect()
	end
end

function LevelManager:Destroy()
	self:Disconnect()

	setmetatable(self, nil)
	table.clear(self)
	table.freeze(self)
end

return LevelManager
