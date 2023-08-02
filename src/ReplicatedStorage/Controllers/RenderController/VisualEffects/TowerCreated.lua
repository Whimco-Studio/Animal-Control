local ReplicatedStorage = game:GetService("ReplicatedStorage")
--[[
--Created Date: Sunday July 30th 2023 2:29:31 am CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Tuesday August 1st 2023 8:54:28 pm CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
type EntityInfo = {
	id: string,
	Map: Folder,
	Body: Vector3,
	AnimalType: string,
	Path: { [number]: BasePart },
	Animal: Model & { HumanoidRootPart: BasePart, Humanoid: Humanoid },
}

--// Modules
local Feel = require(ReplicatedStorage.Modules.Feel)
local Binds = require(ReplicatedStorage.Config.Bindables)

local module = {}

local function WipeInsances(Wipe: { BasePart })
	for i, v in pairs(Wipe) do
		if not v.Parent or v["Destroy"] then
			continue
		end
		v:Destroy()
	end
end

module.Visualize = function(Info: {
	Tower: MeshPart,
})
	local Wipe = {}

	local Root = Info.Tower
	local TowerBase: MeshPart & { Decal: Decal } = Info.TowerBase
	local TowerBaseSize = TowerBase.Size

	TowerBase.Size = Vector3.zero

	Wipe.Copy = Info.Tower:Clone()

	local Copy = Wipe.Copy

	Copy.Anchored = false
	Copy.Size *= 1.05

	local Weld = Instance.new("Weld")
	Weld.Part0 = Root
	Weld.Part1 = Copy
	Weld.Parent = Copy

	Copy.Transparency = 0
	Copy.TextureID = ""
	Copy.Material = Enum.Material.Neon
	Copy.Color = Color3.new(0, 1, 0.26666666666666666)
	Copy.Parent = Info.Tower

	local Fade = Feel.Tween.new(Copy, { Transparency = 1 }, 1, {
		CFrame = Root.CFrame,
		Size = Root.Size * 5.5,
		EasingStyle = Enum.EasingStyle.Linear,
	})

	TowerBase.Decal.Transparency = 0

	Feel.Tween
		.new(
			TowerBase,
			{
				Size = TowerBaseSize,
			},
			1,
			{
				EasingStyle = Enum.EasingStyle.Back,
			}
		)
		:Play()

	Fade:Play()

	Fade.Completed:Wait()

	WipeInsances(Wipe)
end

return module
