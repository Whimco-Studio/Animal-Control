--[[
--Created Date: Thursday July 27th 2023 9:12:25 pm CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Friday July 28th 2023 2:10:33 am CEST
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
local ServerStorage = game:GetService("ServerStorage")

--// Modules
local Knit = require(ReplicatedStorage.Packages.Knit)
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

function LevelManager.new(Map: Map, ClientUpdater: typeof(Knit.CreateSignal()))
	local info = {
		Map = Map,
		ClientUpdater = ClientUpdater,

		EndNodes = {},
		SpawnNodes = {},
		SavedNodes = {},
		Connections = {},
		ActiveAnimals = {},
	}
	setmetatable(info, LevelManager):Init()
	return info
end

function LevelManager:RegisterLevel()
	local Map: Map = self.Map
	local targetNames = { "SpawnNodes", "Paths" }

	for i, v in pairs(Map:GetChildren()) do
		if not table.find(targetNames, v.Name) then
			continue
		end

		local Children = v:GetChildren()
		table.sort(Children, function(a, b)
			return a.Name < b.Name
		end)
		self[v.Name] = Children
	end
end

function LevelManager:Init()
	local Map: Map = self.Map

	self:RegisterLevel()
end

function LevelManager:SpawnAnimal()
	local Map: Map = self.Map

	local Animals = ServerStorage.Enemies:GetChildren()

	local Node = math.random(1, #self.SpawnNodes)
	local Animal = Animals[math.random(1, #Animals)]
	local id = HttpService:GenerateGUID(false)

	local Spawn = self.SpawnNodes[Node]
	local Path = self.Paths[Node]:GetChildren()
	table.sort(Path, compareParts)

	local Info = {
		id = id,
		Path = Path,
		Health = 100,
		Body = Spawn.Position,
		CurrentWaypointIndex = 1,
	}

	if Settings.Debug then
		local tempBody = Instance.new("Part")
		tempBody.Size = Vector3.one * 2
		tempBody.CanCollide = false
		tempBody.Anchored = true
		tempBody.Parent = Map.Enemies
		tempBody.CFrame = Spawn.CFrame

		Info.tempBody = tempBody
	end

	table.insert(self.ActiveAnimals, Info)

	Info.Map = Map
	Info.AnimalType = Animal.Name

	print(#self.ActiveAnimals)

	self.ClientUpdater:FireAll(Info)
end

function LevelManager:GetTableFromId(Id: string)
	for i, v in pairs(self.ActiveAnimals) do
		if v.id == Id then
			return i, v
		end
	end

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

			table.remove(self.ActiveAnimals, InfoTableFromActiveAnimals)
		end
	end
end

function LevelManager:Update(dt: number)
	for animal, info in pairs(self.ActiveAnimals) do
		self:MoveAnimal(dt, info)
	end
end

function LevelManager:Disconnect()
	for _, c: RBXScriptConnection in pairs(self.Connections) do
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
