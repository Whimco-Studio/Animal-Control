local ReplicatedStorage = game:GetService("ReplicatedStorage")
return {
	Pop = function(Root)
		if Root ~= nil then
			local Poof = ReplicatedStorage.Assets.Particles.Poof:Clone()

			Poof.Parent = game.Workspace
			Poof.CFrame = Root.CFrame

			local PopSound = game.SoundService.Pop:Clone()

			PopSound.Parent = Poof
			PopSound.TimePosition = 0.1
			PopSound:Play()
			Poof.Roblox.Enabled = true

			-- Root.Parent:Destroy()
			task.delay(0, function()
				task.wait(0.1)

				Poof.Roblox.Enabled = false
				task.wait(0.5)

				Poof:Destroy()
			end)
		end
	end,
}
