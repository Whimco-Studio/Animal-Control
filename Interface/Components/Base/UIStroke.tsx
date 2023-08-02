/*
 * Created Date: Wednesday August 2nd 2023 1:42:47 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * -----
 * Last Modified: Wednesday August 2nd 2023 4:13:45 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */
import Roact from "@rbxts/roact";
import { Workspace } from "@rbxts/services";

// UIStroke

interface UIStrokeProps {
	Color?: Color3;
	Thickness: number;
	LineJoinMode?: Enum.LineJoinMode;
}

interface UIStrokeState {
	Thickness: number;
}

const STUDIO_SCREEN_SIZE = new Vector2(1366, 767); // change 0, 0 to your studio resolution
const camera: Camera = Workspace.CurrentCamera as Camera;
let instanceAddedSignal = undefined; // stores a connection

function GetAverage(vector: Vector2): number {
	return (vector.X + vector.Y) / 2;
}
const studioAverage = GetAverage(STUDIO_SCREEN_SIZE);
let currentScreenAverage = GetAverage(camera.ViewportSize);

function AdjustThickness(OriginalThickness: number) {
	const ratio = OriginalThickness / studioAverage;
	return currentScreenAverage * ratio;
}

function ModifyUiStrokes(...args: any) {
	currentScreenAverage = GetAverage(camera.ViewportSize); // re-calculate the screen average as it could've changed
	return AdjustThickness(args);
}

export default class UIStroke extends Roact.Component<
	UIStrokeProps,
	UIStrokeState
> {
	public constructor(props: UIStrokeProps) {
		super(props);

		const ratio = (props.Thickness || 1) / studioAverage;
		const Thickness = currentScreenAverage * ratio;

		this.state = {
			Thickness: Thickness,
		};
	}

	public render(): Roact.Element {
		return (
			<uistroke
				Color={this.props.Color || new Color3(0, 0, 0)}
				Thickness={this.state.Thickness || 1}
				LineJoinMode={
					this.props.LineJoinMode || Enum.LineJoinMode.Miter
				}
			/>
		);
	}
}
