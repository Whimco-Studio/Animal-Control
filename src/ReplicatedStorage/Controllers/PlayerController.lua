--[[
--Created Date: Wednesday July 26th 2023 6:13:47 pm CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Thursday July 27th 2023 1:38:55 pm CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--// Services
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local UserInputService = game:GetService("UserInputService")

--// Modules
local Binds = require(ReplicatedStorage.Config.Bindables)
local Feel = require(ReplicatedStorage.Modules.Feel)

--// Knit
local Knit = require(ReplicatedStorage.Packages.Knit)

--// Controller
local PlayerController = Knit.CreateController({ Name = "PlayerController" })

--// Variables
local Mouse = Players.LocalPlayer:GetMouse()

function PlayerController:KnitInit() end

function PlayerController:KnitStart()
	-------------Variables-----------
	local Camera = workspace.CurrentCamera
	self.Connections = {}
	self.Last = false

	local raycastParams = RaycastParams.new()
	raycastParams.FilterType = Enum.RaycastFilterType.Include
	raycastParams.FilterDescendantsInstances = { workspace.Positioning }

	-------------Variables-----------
	-------------Classes-------------

	-------------Classes-------------
	-----------Initialize------------
	Binds.Game.StartMouseCarry.Event:Connect(function(UnitName)
		if UnitName and ReplicatedStorage.Assets.Units[UnitName] then
			local Unit: MeshPart = ReplicatedStorage.Assets.Units[UnitName]:Clone()
			Unit.CanCollide = false
			Unit.Anchored = true
			Unit.Parent = workspace

			self.Last = Unit

			local positionVelocity = Vector3.new(0, 0, 0)
			local orientationVelocity = Vector3.new(0, 0, 0)
			local springConstant = 0.1
			local dampingConstant = 0.7

			local function lerp(a, b, t)
				return a + (b - a) * t
			end

			self.Connections["Camera"] = RunService.RenderStepped:Connect(function()
				local rayOrigin = Camera.CFrame.Position
				local rayDirection = CFrame.new(Camera.CFrame.Position, Mouse.Hit.Position).LookVector * 200

				local raycastResult = workspace:Raycast(rayOrigin, rayDirection, raycastParams)

				if raycastResult then
					local DesiredCF: CFrame = CFrame.new(raycastResult.Position) * CFrame.new(0, Unit.Size.Y / 2, 0)

					-- Use spring-damper model for position
					local positionDifference = DesiredCF.p - Unit.CFrame.p
					local positionAcceleration = positionDifference * springConstant
						- positionVelocity * dampingConstant
					positionVelocity = positionVelocity + positionAcceleration

					local TargetCF = Unit.CFrame * CFrame.new(positionVelocity)
					Unit.CFrame = CFrame.new(TargetCF.Position, DesiredCF.Position)

					-- Use spring-damper model for orientation
					local cAX, cAY, cAZ = Unit.CFrame:ToEulerAnglesXYZ()
					local tAX, tAY, tAZ = DesiredCF:ToEulerAnglesXYZ()
					local orientationDifference = Vector3.new(tAX - cAX, tAY - cAY, tAZ - cAZ)
					local orientationAcceleration = orientationDifference * springConstant
						- orientationVelocity * dampingConstant
					orientationVelocity = orientationVelocity + orientationAcceleration
					Unit.CFrame = Unit.CFrame
						* CFrame.fromEulerAnglesXYZ(orientationVelocity.x, orientationVelocity.y, orientationVelocity.z)
				end
			end)
		end
	end)

	UserInputService.InputBegan:Connect(function(input: InputObject, gameProcessedEvent: boolean)
		if input.KeyCode == Enum.KeyCode.Q then
			Binds.Game.StartMouseCarry:Fire("TNTBarrel")
		end
	end)
	UserInputService.InputEnded:Connect(function(input: InputObject, gameProcessedEvent: boolean)
		if input.KeyCode == Enum.KeyCode.Q then
			if self.Connections["Camera"] then
				self.Connections["Camera"]:Disconnect()
			end

			local Amount = 1.25
			if self.Last then
				local C: MeshPart = self.Last:Clone()
				C.Parent = workspace.Part

				local D: MeshPart = ReplicatedStorage.Assets.Highlight
				D.Material = Enum.Material.Neon
				D.Size = Vector3.new(1, 0.1, 1)
				D.Color = Color3.new(1, 1, 1)
				D.CFrame = C.CFrame * CFrame.new(0, -C.Size, 0)
				D.Parent = C

				local Twen = Feel.Tween.new(
					D,
					{
						Size = Vector3.new(5, 0.1, 5),
						CFrame = C.CFrame * CFrame.new(0, -C.Size.Y, 0),
						Transparency = 1,
					},
					1,
					{
						EasingStyle = Enum.EasingStyle.Linear,
					}
				)

				Twen:Play()

				Twen.Completed:Connect(function()
					D:Destroy()
				end)

				self.Last:Destroy()
			end
		end
	end)
	-----------Initialize------------
end

function PlayerController:MouseLocation() end

return PlayerController
