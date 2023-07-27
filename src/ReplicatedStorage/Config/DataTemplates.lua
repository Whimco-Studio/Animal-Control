local Data = {}

Data.Message = {
	Sender = "",
	Content = "",
}

Data.CharacterSlotData = {
	Quirkymal = "Dove",

	Level = 1,
	Experience = 0,

	Accessories = {},
	Skin = "Base",
	Scale = {
		Scale = 1,
		Depth = 1,
		Height = 1,
		Accesories = 1,
	},
}

Data.ProfileTemplate = {
	Quirmals = 0,
	Qrubies = 0,

	SelectedCharacterSlot = 1,

	Skins = {},

	UnlockedQuirkymals = {
		"Dove",
		"Parrot",
		"Hamster",
		"Toirtise",
	},

	CharacterSlots = {},
	Inventory = {},
	Achievements = {},
	Settings = {
		MusicVolume = 1,
		SFXVolume = 1,
	},

	Friends = {},
}

return Data
