import Roact from "@rbxts/roact";
import { useEffect, useRef, withHooks } from "@rbxts/roact-hooked";
import { Spring, useGroupMotor } from "@rbxts/roact-hooked-plus";
import GameBindables from "Config/GameBindables";

// WaveInformation

interface WaveInformationProps {}

const WaveInformation: Roact.FunctionComponent<WaveInformationProps> = (
	props
) => {
	const [style, setStyle] = useGroupMotor({
		scale: 1,
	});

	const EntityTextBox = useRef<TextLabel>();
	const waveTextBox = useRef<TextLabel>();

	function SetText(TextboxRef: Roact.Ref<TextLabel>, Value: string) {
		let Textbox = TextboxRef.getValue();
		if (Textbox) {
			Textbox.Text = Value;
		}
	}

	useEffect(() => {
		// did mount
		GameBindables.Interface.Wave.UpdateEntityCount.Event.Connect(
			(Count: string) => {
				SetText(EntityTextBox, Count);
			}
		);

		GameBindables.Interface.Wave.UpdateWave.Event.Connect(
			(Count: string) => {
				SetText(waveTextBox, Count);
			}
		);

		GameBindables.Interface.Wave.ResetWave.Event.Connect(() => {
			setStyle({
				scale: new Spring(1, {
					frequency: 4,
				}),
			});
		});
		return () => {}; // will unmount
	}, []);

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
					Ref={EntityTextBox}
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(0.5, 0, 0.4, 0)}
					Text="Waiting to start..."
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
				Ref={waveTextBox}
				Text="Wave 1"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
			/>
			<imagebutton
				Key="StartWave"
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				Image="rbxasset://textures/ui/GuiImagePlaceholder.png"
				ImageColor3={Color3.fromRGB(152, 220, 255)}
				ImageTransparency={1}
				LayoutOrder={2}
				Position={new UDim2(0.5, 0, 1.733, 0)}
				Size={style.map(({ scale }) => {
					return new UDim2(scale * 0.663, 0, scale * 0.647, 0);
				})}
				Event={{
					MouseButton1Click: () => {
						GameBindables.Game.StartWave.Fire();
						GameBindables.Interface.Wave.UpdateEntityCount.Fire(
							"Wave Starting"
						);
						setStyle({
							scale: new Spring(0, {
								frequency: 4,
							}),
						});
					},
				}}
			>
				<frame
					Key="DropShadow"
					BackgroundColor3={Color3.fromRGB(107, 213, 111)}
					BorderSizePixel={0}
					Position={new UDim2(0, 0, 0.05, 0)}
					Size={new UDim2(1, 0, 1, 0)}
				>
					<uicorner />
				</frame>
				<frame
					Key="ButtonColor"
					BackgroundColor3={Color3.fromRGB(110, 252, 108)}
					BorderSizePixel={0}
					Size={new UDim2(1, 0, 1, 0)}
				>
					<uicorner />
				</frame>
				<textlabel
					Key="TimerText"
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					LayoutOrder={1}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(0.8, 0, 0.8, 0)}
					Text="Start Wave"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={14}
					TextWrapped={true}
					ZIndex={2}
				/>
			</imagebutton>
		</frame>
	);
};

export default withHooks(WaveInformation);
