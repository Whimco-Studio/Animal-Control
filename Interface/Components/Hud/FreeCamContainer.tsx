import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";
import GameBindables from "Config/GameBindables";

// FreeCamContainer

interface FreeCamContainerProps {}

const FreeCamContainer: Roact.FunctionComponent<FreeCamContainerProps> = (
	props
) => {
	return (
		<frame
			Key="FreeCamContainer"
			AnchorPoint={new Vector2(0, 0)}
			BackgroundTransparency={1}
			Position={new UDim2(0, 0, 0, 0)}
			Size={new UDim2(0.073, 0, 0.121, 0)}
		>
			<textlabel
				Key="TimerText"
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				Position={new UDim2(-0.17, 0, 0, 0)}
				Size={new UDim2(1.34, 0, 0.268, 0)}
				Text="Free Cam"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
			/>
			<imagebutton
				BackgroundTransparency={1}
				Image="rbxassetid://14205765457"
				Position={new UDim2(0.064, 0, 0.268, 0)}
				Size={new UDim2(4.534, 0, 0.9450000000000001, 0)}
				Event={{
					MouseButton1Click: () => {
						GameBindables.Interface.ToggleCamera.Fire();
					},
				}}
			>
				<uiaspectratioconstraint />
			</imagebutton>
		</frame>
	);
};

export default withHooks(FreeCamContainer);
