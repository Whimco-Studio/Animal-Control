import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";

// WaveManager

interface WaveManagerProps {}

const WaveManager: Roact.FunctionComponent<WaveManagerProps> = (props) => {
	return (
		<frame
			Key="WaveManager"
			BackgroundTransparency={1}
			Visible={false}
			Size={new UDim2(0.151, 0, 0.156, 0)}
		>
			<textlabel
				Key="TimerText"
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				Size={new UDim2(1, 0, 0.2, 0)}
				Text="Start Next Wave"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
			/>
			<frame
				Key="Buttons"
				BackgroundTransparency={1}
				Position={new UDim2(0.162, 0, 0.261, 0)}
				Size={new UDim2(0.676, 0, 0.507, 0)}
			>
				<imagebutton
					BackgroundTransparency={1}
					Image="rbxassetid://14205737956"
					Size={new UDim2(0.435, 0, 1, 0)}
				>
					<uiaspectratioconstraint />
				</imagebutton>
				<imagebutton
					AnchorPoint={new Vector2(1, 0)}
					BackgroundTransparency={1}
					Image="rbxassetid://14205738122"
					Position={new UDim2(1, 0, 0, 0)}
					Size={new UDim2(0.435, 0, 1, 0)}
				>
					<uiaspectratioconstraint />
				</imagebutton>
			</frame>
		</frame>
	);
};

export default withHooks(WaveManager);
