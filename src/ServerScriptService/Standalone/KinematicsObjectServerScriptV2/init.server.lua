-- -- Kinematic Objects script, courtesty of MCR Christmas 2022
-- --
-- -- This tool is designed to greatly simplify coding certain physics interactions in roblox such as elevators and other moving platforms
-- --
-- -- Tags:
-- --    Kinematic - This object is anchored and should be moved by the server every frame (elevators etc)
-- --	  Replicate - This object is part of an assembly and freely simulated, but will be custom replicated
-- --
-- -- To use: Tag a server instance (part or model) with "Kinematic" and then just cframe it with whatever motion you want each frame
-- -- the scripts will take care of replication, smooth motion on the client, as well as providing accurate velocity and angular velocity data
-- -- Each kinematic instance uses 0 bandwidth when idle, and up to ~1kb/s when moving
-- --
-- -- "Replicate" tagged objects will simulate via the server simulation
-- --
-- -- Limitaions:
-- --
-- -- Changes in appearance to the server kinematic parts are not replicated (it's a clone!)
-- -- Kinematically animated objects do not wake up sleeping physics objects
-- -- There is no facility to teleport a kinematic part - they can only interpolate
-- -- The client is currently using smoothing to smooth towards the current position, versus true interpolation.
-- --
-- -- Possible expansions:
-- --
-- -- Because the list of parts is caluclated per player, this could easily be updated to be used for instancing objects just for specific players
-- -- or only updating the position/velocity of players if they are within range
-- --
-- -- It should be possible to flag parts of a server rig/model to be only simulated locally on a client. eg: floppy tails
-- --
-- --
-- -- Technical notes:
-- --  	Okay, so this has ballooned into a big bag of black magic roblox tricks :)
-- --
-- -- 1) Server parts are moved under a "camera" called DoNotReplicate, which prevents them from replicating while still having collision on the server
-- --		Note:	tTis trick only works for anchored parts, if the part is simulated this does not work
-- --
-- -- 2) Server parts are cloned, and sent to each client individually via their playerGui folder (And a screenGui with ResetOnSpawn = false!)
-- --	 	Note:	An event is sent after the cloning, which because of replication order will not "fire" until the replication is complete
-- --
-- -- 3) The velocity and angular velocity of parts are calculated per frame based on their previous cframes (server kinematics)
-- --
-- -- 4) Updates to position and angle are packed using string.pack and do not get sent if there are no changes
-- --		Note 1:	Parts are identidfied by putting a reference to the instance directly in the table sent over the remote event.
-- --	 			Roblox is able to resolve this on the client if the instance is still present.
-- -- 		Note 2:	The replication rate is at 20hz, this can be changed to massively increase the number of parts
-- --

-- if script:IsDescendantOf(game.ServerScriptService) == false then
-- 	error(script.Name .. "needs to be in ServerScriptService")
-- end

-- --Move the client script to where it needs to go
-- local clientScript = script.KinematicObjectsClientScriptV2

-- if clientScript then
-- 	clientScript.Parent = game.ReplicatedFirst
-- end

-- local CollectionService = game:GetService("CollectionService")

-- local doNotReplicate = Instance.new("Camera")
-- doNotReplicate.Name = "DoNotReplicate"
-- doNotReplicate.Parent = game.Workspace

-- local remoteEvent = Instance.new("RemoteEvent")
-- remoteEvent.Name = "KinematicData"
-- remoteEvent.Parent = game.ReplicatedStorage

-- local playerRecords = {}
-- local kinematicObjects = {}
-- local timeOfNextUpdate = 0
-- local serverHz = 10 --Set this to 10, 15 or 20, smaller uses less bandwidth but has less fidelity
-- local uncapped = false --ignore serverHz

-- local maxUID = 255
-- local function FindFreeUID(playerRecord, instance)
-- 	for j = 0, maxUID do
-- 		if playerRecord.usedUID[j] == nil then
-- 			playerRecord.usedUID[j] = instance
-- 			return j
-- 		end
-- 	end
-- 	print("Error - not enough UIDs")
-- 	return 0
-- end

-- local function SendInstanceToPlayer(playerRecord, kinematicRecord)
-- 	if playerRecord.replicatedInstances[kinematicRecord.target] ~= nil then
-- 		return
-- 	end
-- 	--print("Sending instance to player ", kinematicRecord)

-- 	local clone = kinematicRecord.cloneModel:Clone()
-- 	clone.Name = clone.Name .. "_replicated"

-- 	local record = {}
-- 	record.sourceRecord = kinematicRecord
-- 	record.clone = clone
-- 	--This is the id we'll refer to for any further updates
-- 	record.uid = FindFreeUID(playerRecord, kinematicRecord.cloneModel)

-- 	playerRecord.replicatedInstances[kinematicRecord.target] = record

-- 	clone.Parent = playerRecord.kinematicGui
-- 	remoteEvent:FireClient(
-- 		playerRecord.player,
-- 		{ id = "add", instance = clone, parent = kinematicRecord.parent, uid = record.uid }
-- 	)
-- end

-- local maxShort = 32767
-- local function FloatToShort(input)
-- 	return math.clamp(input * 100, -maxShort, maxShort)
-- end

-- function packAxisAngleToBytes(axis, angle)
-- 	-- Scale the values to fit within the range of signed bytes (-128 to 127)
-- 	local scaledX = math.floor(axis.x * 127)
-- 	local scaledY = math.floor(axis.y * 127)
-- 	local scaledZ = math.floor(axis.z * 127)
-- 	local scaledAngle = math.floor(angle * (32767 / math.pi)) -- Scale by 127 divided by pi

-- 	-- Pack the scaled values into a string
-- 	local packedData = string.pack("bbbh", scaledX, scaledY, scaledZ, scaledAngle)

-- 	return packedData
-- end

-- local firstBit = bit32.lshift(1, 0)
-- local secondBit = bit32.lshift(1, 1)
-- local thirdBit = bit32.lshift(1, 2)

-- local function BuildPacketForPlayer(playerRecord)
-- 	local epsilon = 0.0001
-- 	local data = {}
-- 	local send = false

-- 	local packString = ""
-- 	for key, record in playerRecord.replicatedInstances do
-- 		local bits = 0
-- 		local pstring = ""
-- 		local astring = ""

-- 		local p = record.sourceRecord.instance.CFrame.Position
-- 		local axis, angle = record.sourceRecord.instance.CFrame:ToAxisAngle()

-- 		if record.p == nil or record.p:FuzzyEq(p, epsilon) == false then
-- 			--pstring = string.pack("fff", p.x, p.y, p.z)

-- 			if math.abs(p.x * 100) < maxShort and math.abs(p.y * 100) < maxShort and math.abs(p.z * 100) < maxShort then
-- 				pstring = string.pack("hhh", FloatToShort(p.x), FloatToShort(p.y), FloatToShort(p.z))
-- 				bits = bit32.bor(bits, firstBit)
-- 			else
-- 				pstring = string.pack("fff", p.x, p.y, p.z)
-- 				bits = bit32.bor(bits, thirdBit)
-- 			end
-- 		end
-- 		record.p = p

-- 		if
-- 			record.a == nil
-- 			or record.axis:FuzzyEq(axis, epsilon) == false
-- 			or math.abs(record.angle - angle) > epsilon
-- 		then
-- 			--rec.a = string.pack("ffff", axis.x, axis.y, axis.z, angle)
-- 			astring = packAxisAngleToBytes(axis, angle)
-- 			bits = bit32.bor(bits, secondBit)
-- 		end
-- 		record.angle = angle
-- 		record.axis = axis

-- 		--We gotta do any work?
-- 		if bits > 0 then
-- 			packString = packString .. string.pack("B", record.uid) .. string.pack("B", bits) .. pstring .. astring

-- 			send = true
-- 		end
-- 	end

-- 	if send == true then
-- 		remoteEvent:FireClient(playerRecord.player, { id = "move", data = packString })
-- 	end
-- end

-- local function RemoveInstance(instance)
-- 	local record = kinematicObjects[instance]
-- 	if record == nil then
-- 		return
-- 	end

-- 	for _, playerRecord in playerRecords do
-- 		local rec = playerRecord.replicatedInstances[instance]
-- 		if rec then
-- 			remoteEvent:FireClient(playerRecord.player, { id = "del", i = rec.clone })
-- 			playerRecord.replicatedInstances[instance] = nil
-- 			playerRecord.usedUID[rec.uid] = nil
-- 		end
-- 	end

-- 	record.cloneModel:Destroy()
-- 	kinematicObjects[instance] = nil
-- end

-- local function ClearTags(instance)
-- 	CollectionService:RemoveTag(instance, "Kinematic")
-- 	for key, value in instance:GetDescendants() do
-- 		CollectionService:RemoveTag(value, "Kinematic")

-- 		--Remove any scripts
-- 		--if (value:IsA("Script") and value.RunContext==Enum.RunContext.Server or value.RunContext == Enum.RunContext.Legacy) then
-- 		if value:IsA("Script") then
-- 			value:Destroy()
-- 		end
-- 	end

-- 	CollectionService:RemoveTag(instance, "Replicate")
-- 	for key, value in instance:GetDescendants() do
-- 		CollectionService:RemoveTag(value, "Replicate")

-- 		--Remove any scripts
-- 		--if (value:IsA("Script") and value.RunContext==Enum.RunContext.Server or value.RunContext == Enum.RunContext.Legacy) then
-- 		if value:IsA("Script") then
-- 			value:Destroy()
-- 		end
-- 	end
-- end

-- local function AddInstance(target, kinematic)
-- 	if target:IsA("BasePart") == false and target:IsA("Model") == false then
-- 		warn("Kinematic tags must be applied to baseparts and models only:", target)
-- 		return
-- 	end

-- 	local instance = nil
-- 	local model = nil
-- 	if target:IsA("Model") then
-- 		if target.PrimaryPart == nil then
-- 			warn("Kinematic - No primarypart for ", target)
-- 			return
-- 		end
-- 		instance = target.PrimaryPart
-- 		model = target
-- 	else
-- 		instance = target
-- 		model = nil
-- 	end

-- 	--make sure network ownership doesnt do anything weird
-- 	if instance:CanSetNetworkOwnership() then
-- 		instance:SetNetworkOwner(nil)
-- 	end

-- 	--Store data
-- 	local kinematicRecord = {}
-- 	kinematicRecord.target = target
-- 	kinematicRecord.parent = target.Parent
-- 	kinematicRecord.instance = instance
-- 	kinematicRecord.model = model
-- 	kinematicRecord.lastCFrame = instance.CFrame

-- 	--Make a copy for cloning (we might remove clientOnly parts from the original)
-- 	kinematicRecord.cloneModel = target:Clone()
-- 	ClearTags(kinematicRecord.cloneModel)

-- 	kinematicObjects[target] = kinematicRecord

-- 	--set initial instance values
-- 	kinematicRecord.kinematic = kinematic
-- 	if kinematicRecord.kinematic == true then
-- 		instance.Anchored = true
-- 	else
-- 		--leave it on whatever it was
-- 	end

-- 	instance.AssemblyAngularVelocity = Vector3.zero
-- 	instance.AssemblyLinearVelocity = Vector3.zero

-- 	--pull it out of the world
-- 	target.Parent = doNotReplicate

-- 	--Capture the destroy
-- 	target.Destroying:Connect(function()
-- 		RemoveInstance(target)
-- 	end)

-- 	--Replicate the waldo
-- 	for key, playerRecord in playerRecords do
-- 		SendInstanceToPlayer(playerRecord, kinematicRecord)
-- 	end
-- end

-- local function Stepped(deltaTime)
-- 	local list = CollectionService:GetTagged("Kinematic")

-- 	for _, target in list do
-- 		if kinematicObjects[target] == nil then
-- 			AddInstance(target, true)
-- 		end
-- 	end

-- 	local list = CollectionService:GetTagged("Replicate")

-- 	for _, target in list do
-- 		if kinematicObjects[target] == nil then
-- 			AddInstance(target, false)
-- 		end
-- 	end

-- 	for instance, record in kinematicObjects do
-- 		--make sure network ownership doesnt do anything weird
-- 		local instance = record.instance
-- 		if instance:CanSetNetworkOwnership() then
-- 			instance:SetNetworkOwner(nil)
-- 		end
-- 	end

-- 	for instance, record in kinematicObjects do
-- 		if record.kinematic then
-- 			local currentCFrame = record.instance.CFrame
-- 			local posDelta = currentCFrame.Position - record.lastCFrame.Position

-- 			local rotDelta = currentCFrame.Rotation * record.lastCFrame.Rotation:Inverse()
-- 			local x, y, z = rotDelta:ToEulerAngles()
-- 			local angleDelta = Vector3.new(x, y, z)

-- 			record.lastCFrame = currentCFrame
-- 			record.instance.AssemblyLinearVelocity = posDelta / deltaTime
-- 			record.instance.AssemblyAngularVelocity = angleDelta / deltaTime
-- 		end
-- 	end

-- 	if uncapped then
-- 		for key, playerRecord in playerRecords do
-- 			BuildPacketForPlayer(playerRecord)
-- 		end
-- 	else
-- 		timeOfNextUpdate += deltaTime

-- 		if timeOfNextUpdate > 1 / serverHz then
-- 			timeOfNextUpdate = math.fmod(timeOfNextUpdate, 1 / serverHz)

-- 			for key, playerRecord in playerRecords do
-- 				BuildPacketForPlayer(playerRecord)
-- 			end
-- 		end
-- 	end
-- end

-- local function Setup()
-- 	game.Players.PlayerAdded:Connect(function(player)
-- 		local playerRecord = {}
-- 		playerRecord.replicatedInstances = {}
-- 		playerRecord.player = player

-- 		playerRecord.usedUID = {}
-- 		playerRecords[player.UserId] = playerRecord

-- 		--Create a place to put their stuff
-- 		local instance = Instance.new("ScreenGui")
-- 		instance.ResetOnSpawn = false
-- 		instance.Name = "Kinematics"
-- 		instance.Parent = playerRecord.player.PlayerGui
-- 		playerRecord.kinematicGui = instance

-- 		for key, kinematicRecord in kinematicObjects do
-- 			SendInstanceToPlayer(playerRecord, kinematicRecord)
-- 		end
-- 	end)
-- 	game.Players.PlayerRemoving:Connect(function(player)
-- 		playerRecords[player.UserId] = nil
-- 	end)

-- 	game["Run Service"].PreSimulation:Connect(Stepped)
-- end

-- Setup()
