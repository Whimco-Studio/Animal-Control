--[[
--Created Date: Friday July 28th 2023 1:01:53 am CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Friday July 28th 2023 1:03:18 am CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--[[
QuadTree

    A short description of the module.

SYNOPSIS

    -- Lua code that showcases an overview of the API.
    local foobar = QuadTree.TopLevel('foo')
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

-- Implementation of QuadTree.

--// Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")

--// Class
local QuadTree = {}
QuadTree.__index = QuadTree

QuadTree = {}
QuadTree.__index = QuadTree

function QuadTree.new(boundary, capacity)
	local self = setmetatable({}, QuadTree)

	self.boundary = boundary -- A bounding box defining the area this QuadTree covers
	self.capacity = capacity -- Maximum number of objects this QuadTree can hold before subdividing
	self.objects = {} -- Objects in this QuadTree
	self.divided = false -- Whether this QuadTree has subdivided into four smaller QuadTrees

	return self
end

function QuadTree:subdivide()
	-- Create four smaller QuadTrees within this QuadTree's boundary
	-- self.northwest = QuadTree.new(/* Define northwest boundary */, self.capacity)
	-- self.northeast = QuadTree.new(/* Define northeast boundary */, self.capacity)
	-- self.southwest = QuadTree.new(/* Define southwest boundary */, self.capacity)
	-- self.southeast = QuadTree.new(/* Define southeast boundary */, self.capacity)
	self.divided = true
end

function QuadTree:insert(object)
	if #self.objects < self.capacity then
		table.insert(self.objects, object)
	else
		if not self.divided then
			self:subdivide()
		end

		-- Add the object to whichever subdivided QuadTree it belongs to
	end
end

function QuadTree:query(range)
	-- Return all objects in this QuadTree and its subdivisions that fall within the given range
end

-- Add other methods as needed, such as remove, move, etc.

function QuadTree:Disconnect()
	for _, c: RBXScriptConnection in pairs(self.Connections) do
		c:Disconnect()
	end
end

function QuadTree:Destroy()
	self:Disconnect()

	setmetatable(self, nil)
	table.clear(self)
	table.freeze(self)
end

return QuadTree
