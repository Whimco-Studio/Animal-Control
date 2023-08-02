import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";
import UICorner from "Components/Base/UICorner";

// Keybinds

interface KeybindsProps {}

const Keybinds: Roact.FunctionComponent<KeybindsProps> = (props) => {
	return (
		<frame
			Key="Keybinds"
			AnchorPoint={new Vector2(1, 0)}
			BackgroundTransparency={1}
			Position={new UDim2(1, 0, 0.798, 0)}
			Size={new UDim2(0.197, 0, 0.198, 0)}
		>
			<uilistlayout
				Padding={new UDim(0.05, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>
			<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0.294, 0)}>
				<textlabel
					Key="TimerText"
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					LayoutOrder={1}
					Position={new UDim2(0.317, 0, 0.5, 0)}
					Size={new UDim2(0.634, 0, 0.507, 0)}
					Text="Select Nearby Units"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={14}
					TextWrapped={true}
					TextXAlignment={Enum.TextXAlignment.Right}
				/>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					Padding={new UDim(0.1, 0)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>
				<imagebutton
					Key="Button"
					BackgroundTransparency={1}
					Image="rbxasset://textures/ui/GuiImagePlaceholder.png"
					ImageColor3={Color3.fromRGB(152, 220, 255)}
					ImageTransparency={1}
					LayoutOrder={2}
					Size={new UDim2(0.165, 0, 1, 0)}
				>
					<uiaspectratioconstraint />
					<frame
						Key="ButtonColor"
						BackgroundColor3={Color3.fromRGB(128, 168, 193)}
						BorderSizePixel={0}
						Position={new UDim2(0, 0, 0.05, 0)}
						Size={new UDim2(1, 0, 1, 0)}
					>
						<UICorner CornerRadius={2} />
					</frame>
					<frame
						Key="Dropshadow"
						BackgroundColor3={Color3.fromRGB(167, 218, 251)}
						BorderSizePixel={0}
						Size={new UDim2(1, 0, 1, 0)}
					>
						<UICorner CornerRadius={2} />
					</frame>
					<textlabel
						Key="TimerText"
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						Font={Enum.Font.FredokaOne}
						LayoutOrder={1}
						Position={new UDim2(0.5, 0, 0.5, 0)}
						Size={new UDim2(0.6, 0, 0.6, 0)}
						Text="T"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
						ZIndex={2}
					>
						<uiaspectratioconstraint />
					</textlabel>
				</imagebutton>
			</frame>
			<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0.294, 0)}>
				<textlabel
					Key="TimerText"
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					LayoutOrder={1}
					Position={new UDim2(0.317, 0, 0.5, 0)}
					Size={new UDim2(0.634, 0, 0.507, 0)}
					Text="Select All Units"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={14}
					TextWrapped={true}
					TextXAlignment={Enum.TextXAlignment.Right}
				/>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					Padding={new UDim(0.1, 0)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>
				<imagebutton
					Key="Button"
					BackgroundTransparency={1}
					Image="rbxasset://textures/ui/GuiImagePlaceholder.png"
					ImageColor3={Color3.fromRGB(152, 220, 255)}
					ImageTransparency={1}
					LayoutOrder={2}
					Size={new UDim2(0.165, 0, 1, 0)}
				>
					<uiaspectratioconstraint />
					<frame
						Key="ButtonColor"
						BackgroundColor3={Color3.fromRGB(128, 168, 193)}
						BorderSizePixel={0}
						Position={new UDim2(0, 0, 0.05, 0)}
						Size={new UDim2(1, 0, 1, 0)}
					>
						<UICorner CornerRadius={2} />
					</frame>
					<frame
						Key="Dropshadow"
						BackgroundColor3={Color3.fromRGB(167, 218, 251)}
						BorderSizePixel={0}
						Size={new UDim2(1, 0, 1, 0)}
					>
						<UICorner CornerRadius={2} />
					</frame>
					<textlabel
						Key="TimerText"
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						Font={Enum.Font.FredokaOne}
						LayoutOrder={1}
						Position={new UDim2(0.5, 0, 0.5, 0)}
						Size={new UDim2(0.6, 0, 0.6, 0)}
						Text="R"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
						ZIndex={2}
					>
						<uiaspectratioconstraint />
					</textlabel>
				</imagebutton>
			</frame>
			<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0.294, 0)}>
				<textlabel
					Key="TimerText"
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					LayoutOrder={1}
					Position={new UDim2(0.317, 0, 0.5, 0)}
					Size={new UDim2(0.634, 0, 0.507, 0)}
					Text="Deselect All Units"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={14}
					TextWrapped={true}
					TextXAlignment={Enum.TextXAlignment.Right}
				/>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					Padding={new UDim(0.1, 0)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>
				<imagebutton
					Key="Button"
					BackgroundTransparency={1}
					Image="rbxasset://textures/ui/GuiImagePlaceholder.png"
					ImageColor3={Color3.fromRGB(152, 220, 255)}
					ImageTransparency={1}
					LayoutOrder={2}
					Size={new UDim2(0.165, 0, 1, 0)}
				>
					<uiaspectratioconstraint />
					<frame
						Key="ButtonColor"
						BackgroundColor3={Color3.fromRGB(128, 168, 193)}
						BorderSizePixel={0}
						Position={new UDim2(0, 0, 0.05, 0)}
						Size={new UDim2(1, 0, 1, 0)}
					>
						<UICorner CornerRadius={2} />
					</frame>
					<frame
						Key="Dropshadow"
						BackgroundColor3={Color3.fromRGB(167, 218, 251)}
						BorderSizePixel={0}
						Size={new UDim2(1, 0, 1, 0)}
					>
						<UICorner CornerRadius={2} />
					</frame>
					<textlabel
						Key="TimerText"
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						Font={Enum.Font.FredokaOne}
						LayoutOrder={1}
						Position={new UDim2(0.5, 0, 0.5, 0)}
						Size={new UDim2(0.6, 0, 0.6, 0)}
						Text="F"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
						ZIndex={2}
					>
						<uiaspectratioconstraint />
					</textlabel>
				</imagebutton>
			</frame>
		</frame>
	);
};

export default withHooks(Keybinds);
