/*
 * Created Date: Wednesday August 2nd 2023 1:46:50 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * -----
 * Last Modified: Friday August 4th 2023 4:35:20 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */

import Roact from "@rbxts/roact";
import { useState, withHooks } from "@rbxts/roact-hooked";
import FreeCamContainer from "Components/Hud/FreeCamContainer";
import Keybinds from "Components/Hud/Keybinds";
import UnitPanel from "Components/Hud/UnitsPanel/UnitPanel";
import WaveInformation from "Components/Hud/WaveInformation";
import WaveManager from "Components/Hud/WaveManager";
import GameBindables from "Config/GameBindables";

// HeadUserDisplay

interface HeadUserDisplayProps {}

const HeadUserDisplay: Roact.FunctionComponent<HeadUserDisplayProps> = (
	props
) => {
	const [join, setJoin] = useState(false);

	return (
		<frame Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
			{join
				? [
						<FreeCamContainer />,
						// <Keybinds />,
						<UnitPanel />,
						<WaveInformation />,
						<WaveManager />,
				  ].map((elemnt) => elemnt)
				: [
						<textbutton
							Text={"Join Game"}
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromScale(0.2, 0.2)}
							AnchorPoint={new Vector2(0.5, 0.5)}
							Event={{
								MouseButton1Click: () => {
									setJoin(true);
									GameBindables.Game.JoinGame.Fire();
								},
							}}
						/>,
				  ].map((element) => element)}
		</frame>
	);
};

export default withHooks(HeadUserDisplay);
