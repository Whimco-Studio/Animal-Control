--[[
--Created Date: Friday July 28th 2023 12:54:20 am CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Friday July 28th 2023 12:54:47 am CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]

local module = {}

--// Functions
-- Custom comparison function to extract numerical part from names and compare them
function module.compareParts(a, b)
	local numA = tonumber(a.Name:match("%d+")) or 0
	local numB = tonumber(b.Name:match("%d+")) or 0
	return numA > numB
end

return module
