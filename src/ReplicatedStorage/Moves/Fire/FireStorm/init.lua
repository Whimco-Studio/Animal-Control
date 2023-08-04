--[[
	--Created Date: Thursday August 3rd 2023 5:28:40 pm CEST
	--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
	-------
	--Last Modified: Thursday August 3rd 2023 5:38:56 pm CEST
	--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]

local RunService = game:GetService("RunService")

if RunService:IsClient() then
	return function()
		print("Its Client")
	end
else
	return function()
		print("Its Server")
	end
end
