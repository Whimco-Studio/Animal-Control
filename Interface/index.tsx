/*
 * Created Date: Wednesday August 2nd 2023 1:46:31 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * -----
 * Last Modified: Wednesday August 2nd 2023 4:29:43 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */
import Roact from "@rbxts/roact";

import { Players, ReplicatedStorage } from "@rbxts/services";
import HeadUserDisplay from "Pages/HeadUserDisplay";
import Object from "@rbxts/object-utils";
import { StoreProvider } from "@rbxts/roact-rodux-hooked";
import clientStore from "Hooks/store";
import InterfaceBindables from "Config/InterfaceBindables";

// Binds
const Bindables = require(ReplicatedStorage.Config.Bindables) as Bindables;

// Pages
const Pages: { [key: string]: Roact.Element } = {
	["HeadUserDisplay"]: <HeadUserDisplay />,
};

class Interface {
	Trees: { [key: string]: Roact.Tree };

	ScreenGUI: ScreenGui;

	constructor(PlayerGUI: PlayerGui) {
		const ScreenGUI = new Instance("ScreenGui");
		ScreenGUI.Name = "Interface";
		ScreenGUI.ResetOnSpawn = false;
		ScreenGUI.Parent = PlayerGUI;

		this.Trees = {};
		this.ScreenGUI = ScreenGUI;
		this.connections();
		// this.mountScreen("HeadUserDisplay");
	}

	screenMountTest(ScreenName: string) {
		task.wait(3);
		print("Starting Animation");
		InterfaceBindables.TriggerAnimation.Fire(ScreenName, true);
		task.wait(3);
		print("Starting Animation");
		InterfaceBindables.TriggerAnimation.Fire(ScreenName, false);
	}

	connections() {
		Bindables.Interface.SplashScreen.ClickToBegin.Event.Connect(() => {
			this.unmountScreen("SplashScreen");
			this.mountScreen("CharacterSelection");
		});
		Bindables.Interface.CharacterSelection.CreateCharacter.Event.Connect(
			() => {
				this.unmountScreen("CharacterSelection");
				this.mountScreen("CharacterCreation");
			}
		);

		Bindables.Interface.UnmountScreen.Event.Connect(
			(ScreenName: string) => {
				print(ScreenName);
				this.unmountScreen(ScreenName);
			}
		);
		Bindables.Interface.MountScreen.Event.Connect((ScreenName: string) => {
			print(ScreenName);
			this.mountScreen(ScreenName);
		});
	}

	unmountSafeGuard(ScreenName: string) {
		const ActiveTree = this.Trees[ScreenName];

		if (ActiveTree) {
			return ActiveTree;
		}

		return false;
	}
	mountSafeGuard(ScreenName: string) {
		const Page = Pages[ScreenName];
		const ActiveTree = this.Trees[ScreenName];

		if (Page && !ActiveTree) {
			return true;
		}

		return false;
	}

	mountScreen(ScreenName: string) {
		if (this.mountSafeGuard(ScreenName)) {
			this.Trees[ScreenName] = Roact.mount(
				<StoreProvider store={clientStore}>
					{Pages[ScreenName]}
				</StoreProvider>,
				this.ScreenGUI,
				ScreenName
			);
		}
	}

	unmountScreen(ScreenName: string) {
		const ActiveTree = this.Trees[ScreenName];
		if (this.unmountSafeGuard(ScreenName)) {
			Roact.unmount(ActiveTree);
			this.Trees[ScreenName] = undefined as unknown as Roact.Tree;
		}
	}

	init() {}

	destroy() {
		// for (const [k, v] of pairs(this.Trees)) {
		// 	this.unmountScreen(k);
		// }
	}
}

export = Interface;
