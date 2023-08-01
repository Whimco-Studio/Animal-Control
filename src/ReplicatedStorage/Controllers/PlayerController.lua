--[[
--Created Date: Wednesday July 26th 2023 6:13:47 pm CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Tuesday August 1st 2023 3:18:19 am CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--// Services
local HttpService = game:GetService("HttpService")
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

function PlayerController:KnitInit()
	self.SpawnLoop = false
end

function PlayerController:KnitStart()
	-------------Variables-----------
	local GameService = Knit.GetService("GameService")
	local Camera = workspace.CurrentCamera
	self.Connections = {}
	self.Last = false
	self.LastPosition = Vector3.zero

	local raycastParams = RaycastParams.new()
	raycastParams.FilterType = Enum.RaycastFilterType.Include
	raycastParams.FilterDescendantsInstances = { workspace.Positioning }

	-------------Variables-----------
	-------------Classes-------------

	-------------Classes-------------
	-----------Initialize------------

	local function castRay()
		local rayOrigin = Camera.CFrame.Position
		local rayDirection = CFrame.new(Camera.CFrame.Position, Mouse.Hit.Position).LookVector * 200
		local raycastResult = workspace:Raycast(rayOrigin, rayDirection, raycastParams)

		return raycastResult
	end

	Binds.Game.StartMouseCarry.Event:Connect(function(UnitName)
		local Units = ReplicatedStorage.Assets.Units
		local AllUnits = Units:GetChildren()

		local Found = UnitName ~= "Random" and Units[UnitName] or AllUnits[math.random(1, #AllUnits)]

		if UnitName and Found then
			local Unit: MeshPart = Found:Clone()
			Unit.CanCollide = false
			Unit.Anchored = true

			local initRay = castRay()
			if initRay then
				self.LastPosition = initRay.Position

				local OldSize = Unit.Size

				Unit.CFrame = CFrame.new(initRay.Position) * CFrame.new(0, OldSize.Y / 2, 0) -- * CFrame.new(0, -(Unit.Size.Y + Unit.Size.Y / 2), 0)
				Unit.Size = Vector3.zero

				local T = Feel.Tween.new(Unit, { Size = OldSize }, 0.5, {
					EasingStyle = Enum.EasingStyle.Back,
				})

				T:Play()
			end

			Unit.Parent = workspace.PlacedUnits

			self.Last = Unit

			local positionVelocity = Vector3.new(0, 0, 0)
			local orientationVelocity = Vector3.new(0, 0, 0)
			local springConstant = 0.1
			local dampingConstant = 0.7

			self.Connections["Camera"] = RunService.RenderStepped:Connect(function()
				local raycastResult = castRay()

				if raycastResult then
					self.LastPosition = raycastResult.Position

					local DesiredCF: CFrame = CFrame.new(raycastResult.Position) * CFrame.new(0, Unit.Size.Y / 2, 0)

					-- Use spring-damper model for position
					local positionDifference = DesiredCF.p - Unit.CFrame.p
					local positionAcceleration = positionDifference * springConstant
						- positionVelocity * dampingConstant
					positionVelocity = positionVelocity + positionAcceleration

					local TargetCF = Unit.CFrame * CFrame.new(positionVelocity)
					Unit.CFrame = TargetCF --CFrame.new(TargetCF.Position, DesiredCF.Position)

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
			Binds.Game.StartMouseCarry:Fire("Random")
		end
	end)
	UserInputService.InputEnded:Connect(function(input: InputObject, gameProcessedEvent: boolean)
		if input.KeyCode == Enum.KeyCode.Q then
			if self.Connections["Camera"] then
				self.Connections["Camera"]:Disconnect()
			end

			local Amount = 1.25
			if self.Last then
				local Id = HttpService:GenerateGUID(false)

				local C: MeshPart = self.Last:Clone()
				C:SetAttribute("Id", Id)
				C.Parent = workspace.PlacedUnits

				local ClickDetector = Instance.new("ClickDetector")
				ClickDetector.Parent = C
				C.Touched:Connect(function()
					Binds.Game.TowerClicked:Fire(Id)
				end)

				GameService.CreateTower:Fire(self.Last.Name, self.LastPosition, Id)
				Binds.Game.TowerCreated:Fire(C, Id)

				self.Last:Destroy()
			end
		end
	end)

	self:Binds()
	-----------Initialize------------
end

function PlayerController:StartCycle()
	local GameService = Knit.GetService("GameService")

	repeat
		GameService.SpawnAnimal:Fire()
		task.wait(1)
	until not self.SpawnLoop
end

function PlayerController:Binds()
	local GameService = Knit.GetService("GameService")
	UserInputService.InputBegan:Connect(function(input, gameProcessedEvent)
		if input.KeyCode == Enum.KeyCode.E then
			self.SpawnLoop = true
			self:StartCycle()
		end
	end)

	UserInputService.InputEnded:Connect(function(input, gameProcessedEvent)
		if input.KeyCode == Enum.KeyCode.E then
			self.SpawnLoop = false
		end
	end)
end

function PlayerController:MouseLocation() end

return PlayerController
