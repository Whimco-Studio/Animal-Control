--[[
--Created Date: Wednesday July 26th 2023 6:27:17 pm CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Wednesday July 26th 2023 6:27:23 pm CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--// Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")

--// Basic State
local BasicState = require(ReplicatedStorage.Packages.BasicState)

local Server = BasicState.new({
	Index = nil,
})

return Server
