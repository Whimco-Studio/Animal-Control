local ReplicatedStorage = game:GetService("ReplicatedStorage")
--[[
--Created Date: Sunday July 30th 2023 2:29:31 am CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Tuesday August 1st 2023 3:52:29 am CEST
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

local function CreateTween(Frame: Frame, Value: number): Tween
	local Goal = if Value < 0 then 0 else Value

	local Tween = Feel.Tween.new(
		Frame,
		{
			Size = UDim2.fromScale(Goal, 1),
		},
		0.25,
		{
			EasingStyle = Enum.EasingStyle.Back,
		}
	)

	return Tween
end

module.Visualize = function(AnimalInfo: EntityInfo, Info)
	local Wipe = {}

	local BillboardGuiUI = AnimalInfo.Animal.EnemyUI
	local FillTop: Frame = BillboardGuiUI:FindFirstChild("FillTop", true)
	local FillBottom: Frame = BillboardGuiUI:FindFirstChild("FillBottom", true)

	local TweenTop = CreateTween(FillTop, Info.Value)
	local TweenBottom = CreateTween(FillBottom, Info.Value)

	TweenTop:Play()
	TweenTop.Completed:Connect(function()
		TweenBottom:Play()
	end)

	Wipe.TweenTop = TweenTop
	Wipe.TweenBottom = TweenBottom

	local Root = AnimalInfo.Animal.HumanoidRootPart

	Wipe.Copy = AnimalInfo.Animal.HumanoidRootPart:Clone()

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
	Copy.Parent = AnimalInfo.Animal

	local Fade = Feel.Tween.new(Copy, { Transparency = 1 }, 0.25, {
		EasingStyle = Enum.EasingStyle.Linear,
	})

	Fade:Play()

	Fade.Completed:Wait()

	if Info.Value <= 0 then
		BillboardGuiUI:Destroy()
		local Shrink = Feel.Tween.new(
			Root,
			{
				Size = Vector3.zero,
				Transparency = 1,
				CFrame = (Root.CFrame * CFrame.new(0, 2.5, 0)) * CFrame.fromEulerAnglesXYZ(
					math.rad(math.random(0, 180)),
					math.rad(math.random(0, 180)),
					math.rad(math.random(0, 180))
				),
			},
			1,
			{
				EasingStyle = Enum.EasingStyle.Linear,
				EasingDirection = Enum.EasingDirection.Out,
			}
		)

		Shrink:Play()

		local C
		C = Shrink.Completed:Connect(function(playbackState)
			Binds.Game.RemoveAnimal:Fire(AnimalInfo.id)
			C:Disconnect()
		end)
	end
	WipeInsances(Wipe)
end

return module
