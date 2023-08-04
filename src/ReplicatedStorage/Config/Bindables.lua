return {
	Game = {
		JoinGame = Instance.new("BindableEvent"),
		StartWave = Instance.new("BindableEvent"),
		StartMouseCarry = Instance.new("BindableEvent"),
		EndMouseCarry = Instance.new("BindableEvent"),
		TowerClicked = Instance.new("BindableEvent"),
		RemoveAnimal = Instance.new("BindableEvent"),
		TowerCreated = Instance.new("BindableEvent"),
		TowerInitialized = Instance.new("BindableEvent"),
	},
	Interface = {
		Blur = Instance.new("BindableEvent"),
		MountScreen = Instance.new("BindableEvent"),
		UnmountScreen = Instance.new("BindableEvent"),

		ToggleCamera = Instance.new("BindableEvent"),

		Wave = {
			ResetWave = Instance.new("BindableEvent"),
			UpdateWave = Instance.new("BindableEvent"),
			UpdateEntityCount = Instance.new("BindableEvent"),
		},

		SplashScreen = {
			ClickToBegin = Instance.new("BindableEvent"),
		},
		CharacterSelection = {
			GetCharacters = Instance.new("BindableFunction"),
			CreateCharacter = Instance.new("BindableEvent"),
			SelectCharacter = Instance.new("BindableFunction"),
			SwitchCharacter = Instance.new("BindableFunction"),
		},
		CharacterCreation = {
			FinishCharacter = Instance.new("BindableFunction"),
			SwitchCharacter = Instance.new("BindableFunction"),
		},
	},
}
