if script:IsDescendantOf(game.ReplicatedFirst) == false then
	error(script.Name .. "needs to be in ReplicatedFirst")
end

local CollectionService = game:GetService("CollectionService")

local kinematicObjects = {}
local kinematicObjectsMap = {}

local function AddInstance(target, uid)
	local instance = nil
	local model = nil
	if target:IsA("Model") then
		instance = target.PrimaryPart
		model = target
	else
		instance = target
		model = nil
	end

	local record = {}
	record.instance = instance
	record.model = model
	record.target = target

	--Anchor it locally, we're always always going to be setting its position manually from now on
	instance.Anchored = true

	--grab all the parts that need their velocity set
	record.parts = {}
	for key, value in record.target:GetDescendants() do
		if value:IsA("BasePart") then
			table.insert(record.parts, value)
			value.Anchored = true
		end
	end

	record.currentCFrame = instance.CFrame
	record.targetCFrame = instance.CFrame
	record.lastCFrame = instance.CFrame

	kinematicObjects[target] = record
	kinematicObjectsMap[uid] = target
end

local function RemoveInstance(instance)
	local record = kinematicObjects[instance]
	if record == nil then
		return
	end

	kinematicObjects[instance] = nil

	if record then
		record.target:Destroy()
	end
end

local function ShortToFloat(input)
	return input / 100
end

function unpackBytesToAxisAngle(packedData, startPos)
	-- Unpack the packed data into signed bytes
	local scaledX, scaledY, scaledZ, scaledAngle = string.unpack("bbbh", packedData, startPos)

	-- Scale the signed bytes back to the original values
	local axis = Vector3.new(scaledX / 127, scaledY / 127, scaledZ / 127)
	local angle = scaledAngle * (math.pi / 32767) -- Scale by pi divided by 127

	return axis, angle
end

local firstBit = bit32.lshift(1, 0)
local secondBit = bit32.lshift(1, 1)
local thirdBit = bit32.lshift(1, 2)
local fourthBit = bit32.lshift(1, 3)

local remoteEvent = game.ReplicatedStorage:WaitForChild("KinematicData")
remoteEvent.OnClientEvent:Connect(function(data)
	--We got a remote event
	if data.id == "add" then
		data.instance.Parent = data.parent

		AddInstance(data.instance, data.uid)
	elseif data.id == "move" then
		local readPos = 1
		local rec = data.data
		local len = string.len(data.data)
		--for key,rec in data.data do

		while readPos < len do
			local uid = string.unpack("B", rec, readPos)
			readPos += 1
			local bits = string.unpack("B", rec, readPos)
			readPos += 1

			local instance = kinematicObjectsMap[uid]
			--local instance = rec.i

			if instance then
				local kinematicRecord = kinematicObjects[instance]

				--Low precision pos
				if bit32.band(bits, firstBit) > 0 then
					local posx, posy, posz = string.unpack("hhh", rec, readPos)
					posx = ShortToFloat(posx)
					posy = ShortToFloat(posy)
					posz = ShortToFloat(posz)
					readPos += 6

					kinematicRecord.pos = CFrame.new(Vector3.new(posx, posy, posz))
				end

				--High precision pos
				if bit32.band(bits, thirdBit) > 0 then
					local posx, posy, posz = string.unpack("fff", rec, readPos)
					readPos += 12
					kinematicRecord.pos = CFrame.new(Vector3.new(posx, posy, posz))
				end

				--Low precision angle
				if bit32.band(bits, secondBit) > 0 then
					local axis, angle = unpackBytesToAxisAngle(rec, readPos)
					readPos += 5
					kinematicRecord.rot = CFrame.fromAxisAngle(axis, angle)
				end

				--High precision angle
				--if (bit32.band(bits, fourthBit) > 0) then
				--	local axisx, axisy, axisz, angle = string.unpack("ffff", rec, readPos)
				--readPos+=16
				--kinematicRecord.rot = CFrame.fromAxisAngle(Vector3.new(axisx, axisy, axisz), angle)
				--end
			end
		end
	elseif data.id == "del" then
		local instance = data.i
		RemoveInstance(instance)
	end
end)

function SmoothLerp(variableA, variableB, fraction, deltaTime)
	local f = 1.0 - math.pow(1.0 - fraction, deltaTime)

	if type(variableA) == "number" then
		return ((1 - f) * variableA) + (variableB * f)
	end

	return variableA:Lerp(variableB, f)
end

local function Stepped(deltaTime)
	local smoothFactor = 0.99999

	for instance, record in kinematicObjects do
		if record.pos == nil or record.rot == nil then
			return
		end
		record.targetCFrame = record.pos * record.rot

		record.currentCFrame = SmoothLerp(record.currentCFrame, record.targetCFrame, smoothFactor, deltaTime)

		--Altitude hack
		--record.currentCFrame = CFrame.new(  Vector3.new(record.currentCFrame.Position.X, record.targetCFrame.Position.Y, record.currentCFrame.Position.Z)) * record.currentCFrame.Rotation
		--record.currentCFrame =record.targetCFrame

		if record.model then
			record.model:PivotTo(record.currentCFrame)
		else
			record.instance.CFrame = record.currentCFrame
		end

		local posDelta = record.currentCFrame.Position - record.lastCFrame.Position

		local rotDelta = record.currentCFrame.Rotation * record.lastCFrame.Rotation:Inverse()
		local x, y, z = rotDelta:ToEulerAngles()
		local angleDelta = Vector3.new(x, y, z)

		record.lastCFrame = record.currentCFrame

		if record.model then
			for key, part in record.parts do
				part.Anchored = true
				part.AssemblyLinearVelocity = posDelta / deltaTime
				part.AssemblyAngularVelocity = angleDelta / deltaTime
			end
		else
			record.instance.Anchored = true
			record.instance.AssemblyLinearVelocity = posDelta / deltaTime
			record.instance.AssemblyAngularVelocity = angleDelta / deltaTime
		end
	end
end

local function Setup()
	game["Run Service"].PreSimulation:Connect(Stepped)
end

Setup()
