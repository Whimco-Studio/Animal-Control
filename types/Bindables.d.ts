/*
 * Created Date: Wednesday August 2nd 2023 1:54:53 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * -----
 * Last Modified: Friday August 4th 2023 4:24:37 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */

interface Bindables {
	Game: {
		JoinGame: BindableEvent;
		StartWave: BindableEvent;
		EndMouseCarry: BindableEvent;
		StartMouseCarry: BindableEvent;
		TowerClicked: BindableEvent;
		RemoveAnimal: BindableEvent;
		TowerCreated: BindableEvent;
		TowerInitialized: BindableEvent;
	};
	Interface: {
		Blur: BindableEvent;
		MountScreen: BindableEvent;
		ToggleCamera: BindableEvent;
		UnmountScreen: BindableEvent;

		Wave: {
			ResetWave: BindableEvent;
			UpdateWave: BindableEvent;
			UpdateEntityCount: BindableEvent;
		};

		Tower: {
			CreateTower: BindableEvent;
		};

		SplashScreen: {
			ClickToBegin: BindableEvent;
		};

		CharacterSelection: {
			GetCharacters: BindableFunction;
			CreateCharacter: BindableEvent;
			SelectCharacter: BindableFunction;
			SwitchCharacter: BindableFunction;
		};
		CharacterCreation: {
			FinishCharacter: BindableFunction;
			SwitchCharacter: BindableFunction;
		};
	};
}
