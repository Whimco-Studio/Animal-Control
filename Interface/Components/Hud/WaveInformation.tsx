import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";

// WaveInformation

interface WaveInformationProps {}

const WaveInformation: Roact.FunctionComponent<WaveInformationProps> = (
	props
) => {
	return (
		<frame
			Key="WaveInformation"
			AnchorPoint={new Vector2(0.5, 0)}
			BackgroundTransparency={1}
			Position={new UDim2(0.5, 0, 0, 0)}
			Size={new UDim2(0.15, 0, 0.1, 0)}
		>
			<imagelabel
				Key="TimerBackground"
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				Image="rbxassetid://14205662249"
				Position={new UDim2(0.5, 0, 0.8, 0)}
				Size={new UDim2(0.5660000000000001, 0, 0.8300000000000001, 0)}
			>
				<textlabel
					Key="TimerText"
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(0.5, 0, 0.4, 0)}
					Text="0:30"
					TextColor3={Color3.fromRGB(0, 0, 0)}
					TextScaled={true}
					TextSize={14}
					TextWrapped={true}
				/>
			</imagelabel>
			<textlabel
				Key="TimerText"
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(0.7000000000000001, 0, 0.6, 0)}
				Text="Wave 1"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
			/>
		</frame>
	);
};

export default withHooks(WaveInformation);
