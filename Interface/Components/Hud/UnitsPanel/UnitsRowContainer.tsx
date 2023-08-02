import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";

// UnitsRowContainer

interface UnitsRowContainerProps {
	[Roact.Children]?: Roact.Children;
}

const UnitsRowContainer: Roact.FunctionComponent<UnitsRowContainerProps> = (
	props
) => {
	return (
		<frame
			Key="UnitsRowContainer"
			ZIndex={3}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderSizePixel={0}
			Position={new UDim2(0, 0, 0.036000000000000004, 0)}
			Size={new UDim2(0.9390000000000001, 0, 0.018000000000000002, 84)}
		>
			{props[Roact.Children]}
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0.075, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>
			<uiaspectratioconstraint AspectRatio={3.222} />
		</frame>
	);
};

export default withHooks(UnitsRowContainer);
