/*
 * Created Date: Wednesday August 2nd 2023 1:46:50 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * -----
 * Last Modified: Wednesday August 2nd 2023 2:01:45 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */

import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";
import FreeCamContainer from "Components/Hud/FreeCamContainer";
import Keybinds from "Components/Hud/Keybinds";
import UnitPanel from "Components/Hud/UnitsPanel/UnitPanel";
import WaveInformation from "Components/Hud/WaveInformation";
import WaveManager from "Components/Hud/WaveManager";

// HeadUserDisplay

interface HeadUserDisplayProps {}

const HeadUserDisplay: Roact.FunctionComponent<HeadUserDisplayProps> = (
	props
) => {
	return (
		<frame Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
			<FreeCamContainer />
			<Keybinds />
			<UnitPanel />
			<WaveInformation />
			<WaveManager />
		</frame>
	);
};

export default withHooks(HeadUserDisplay);
