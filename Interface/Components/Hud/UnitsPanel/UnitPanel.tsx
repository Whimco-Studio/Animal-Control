import Roact from "@rbxts/roact";
import { withHooks } from "@rbxts/roact-hooked";
import { ReplicatedStorage } from "@rbxts/services";
import { Array } from "@rbxts/sift";
import UnitSlot from "./UnitSlot";
import UnitsRowContainer from "./UnitsRowContainer";

let units: MeshPart[] =
	ReplicatedStorage.Assets.Units.GetChildren() as MeshPart[];

// UnitsPanel

interface UnitsPanelProps {}

function CreateUnits() {
	// Create an array of frames, each containing 3 or less units
	let frames = units.reduce((resultArray: any[][], unit, index) => {
		const chunkIndex = math.floor(index / 3);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // start a new chunk
		}

		resultArray[chunkIndex].push(unit);

		return resultArray;
	}, []);

	// Map over the frames, create a new frame for each one and fill them with ImageButtons
	return frames.map((frameUnits, frameIndex) => {
		return (
			// <frame key={frameIndex}>
			<UnitsRowContainer>
				{frameUnits.map((unit, unitIndex) => (
					<UnitSlot Item={unit} />
				))}
			</UnitsRowContainer>
		);
	});
}

const UnitsPanel: Roact.FunctionComponent<UnitsPanelProps> = (props) => {
	return (
		<frame
			Key="UnitPanel"
			BackgroundTransparency={1}
			Position={new UDim2(0, 0, 0.727, 0)}
			Size={new UDim2(0.27, 0, 0.273, 0)}
		>
			<imagelabel
				Key="Background"
				ZIndex={-1}
				BackgroundTransparency={1}
				Image="rbxassetid://14205889421"
				Size={new UDim2(1, 0, 1, 0)}
			/>
			<scrollingframe
				ZIndex={2}
				Active={true}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.033, 0, 0.135, 0)}
				CanvasSize={new UDim2(0, 0, math.ceil(units.size() / 3), 0)}
				ScrollBarImageColor3={Color3.fromRGB(152, 220, 255)}
				Size={new UDim2(0.894, 0, 0.836, 0)}
			>
				{CreateUnits()}
				<uilistlayout
					Padding={new UDim(0, 15)}
					SortOrder={Enum.SortOrder.LayoutOrder}
				/>
				<uipadding
					PaddingLeft={new UDim(0.025, 0)}
					PaddingRight={new UDim(0.025, 0)}
					PaddingTop={new UDim(0.025, 0)}
				/>
			</scrollingframe>
		</frame>
	);
};

export default withHooks(UnitsPanel);
