local Positioning = require(script.Parent.Positioning)

return {
	["FancyTophat"] = {
		["Dove"] = {
			Scaling = 1,
			Positioning = Positioning.Dove.Headwear * CFrame.fromEulerAnglesXYZ(0, math.pi, 0),
		},
	},
	["Headband"] = {
		["Dove"] = {
			Scaling = 1,
		},
	},
}
