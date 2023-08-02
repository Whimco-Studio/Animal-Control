/*
 * Created Date: Saturday July 22nd 2023 10:54:09 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * -----
 * Last Modified: Wednesday August 2nd 2023 1:42:40 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */
import Roact from "@rbxts/roact";
import { Workspace } from "@rbxts/services";

// UICorner

interface UICornerProps {
	Color?: Color3;
	CornerRadius: number;
}

interface UICornerState {
	CornerRadius: number;
}

const STUDIO_SCREEN_SIZE = new Vector2(1366, 767); // change 0, 0 to your studio resolution
const camera: Camera = Workspace.CurrentCamera as Camera;
let instanceAddedSignal = undefined; // stores a connection

function GetAverage(vector: Vector2): number {
	return (vector.X + vector.Y) / 2;
}
const studioAverage = GetAverage(STUDIO_SCREEN_SIZE);
let currentScreenAverage = GetAverage(camera.ViewportSize);

function AdjustCornerRadius(OriginalCornerRadius: number) {
	const ratio = OriginalCornerRadius / studioAverage;
	return currentScreenAverage * ratio;
}

function ModifyUICorners(...args: any) {
	currentScreenAverage = GetAverage(camera.ViewportSize); // re-calculate the screen average as it could've changed
	return AdjustCornerRadius(args);
}

export default class UICorner extends Roact.Component<
	UICornerProps,
	UICornerState
> {
	public constructor(props: UICornerProps) {
		super(props);

		const ratio = (props.CornerRadius || 1) / studioAverage;
		const CornerRadius = currentScreenAverage * ratio;

		this.state = {
			CornerRadius: CornerRadius,
		};
	}

	public render(): Roact.Element {
		return (
			<uicorner
				CornerRadius={new UDim(0, this.state.CornerRadius || 1)}
			/>
		);
	}
}
