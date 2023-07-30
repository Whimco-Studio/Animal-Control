local ReplicatedStorage = game:GetService("ReplicatedStorage")
--[[
--Created Date: Sunday July 30th 2023 2:29:31 am CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Sunday July 30th 2023 3:10:25 am CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
type EntityInfo = {
	id: string,
	Map: Folder,
	Body: Vector3,
	AnimalType: string,
	Path: { [number]: BasePart },
}

--// Modules
local Feel = require(ReplicatedStorage.Modules.Feel)

local module = {}

local function WipeInsances(Wipe: { BasePart })
	for i, v in pairs(Wipe) do
		if not v.Parent then
			continue
		end
		v:Destroy()
	end
end

module.Visualize = function(Info: EntityInfo & { Animal: Model & { HumanoidRootPart: MeshPart } })
	local Wipe = {}
	local Root = Info.Animal.HumanoidRootPart

	Wipe.Copy = Info.Animal.HumanoidRootPart:Clone()

	local Copy = Wipe.Copy

	Copy.Anchored = false
	Copy.Size *= 1.05

	local Weld = Instance.new("Weld")
	Weld.Part0 = Root
	Weld.Part1 = Copy
	Weld.Parent = Copy

	Copy.Transparency = 0.5
	Copy.TextureID = ""
	Copy.Material = Enum.Material.Neon
	Copy.Color = Color3.new(1, 0, 0)
	Copy.Parent = Info.Animal

	local Fade = Feel.Tween.new(Copy, { Transparency = 1 }, 0.25, {
		EasingStyle = Enum.EasingStyle.Linear,
	})

	Fade:Play()

	Fade.Completed:Wait()

	WipeInsances(Wipe)
end

return module
