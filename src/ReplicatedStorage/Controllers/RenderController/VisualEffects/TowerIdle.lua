--[[
--Created Date: Tuesday August 1st 2023 7:28:50 pm CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Tuesday August 1st 2023 8:32:17 pm CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]

--// Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")

--// Types

--// Modules
local Feel = require(ReplicatedStorage.Modules.Feel)
local Binds = require(ReplicatedStorage.Config.Bindables)

local module = {}

module.Visualize = function(Info)
	print("Success")
	local Tower: MeshPart = Info.Tower
	local StartCF = Tower.CFrame * CFrame.new(0, 2, 0)

	local amplitude = 3 -- offset on both sides
	local magnitude = 2.5 -- time

	local Active = true

	local function Stop()
		Active = false
	end

	task.spawn(function()
		while Active do
			local Down = false
			for i = 0, 1, 0.1 do
				local value = (Down and 1 or 0)
				local sin = math.sin(value)
				local cos = math.cos(value)

				local TargetHeight = amplitude * math.sin(tick() * math.pi / magnitude)
				local DesiredCF = StartCF * CFrame.new(0, TargetHeight, 0)
				Tower.CFrame =
					Tower.CFrame:Lerp(DesiredCF * CFrame.fromEulerAnglesXYZ(TargetHeight, 0, TargetHeight), task.wait())
				task.wait()
			end
			Down = not Down
		end
	end)

	return Stop
end

return module
