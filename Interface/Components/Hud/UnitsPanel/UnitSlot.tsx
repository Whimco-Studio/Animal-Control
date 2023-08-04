/*
 * Created Date: Wednesday August 2nd 2023 1:40:57 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * -----
 * Last Modified: Thursday August 3rd 2023 2:32:26 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */
import Roact from "@rbxts/roact";
import { useEffect, useRef, withHooks } from "@rbxts/roact-hooked";
import { Spring, useGroupMotor } from "@rbxts/roact-hooked-plus";
import { Players, UserInputService, Workspace } from "@rbxts/services";
import UICorner from "Components/Base/UICorner";
import UIStroke from "Components/Base/UIStroke";
import GameBindables from "Config/GameBindables";
import InterfaceBindables from "Config/InterfaceBindables";

// UnitSlot

interface UnitSlotProps {
	Item: MeshPart;
}

const UnitSlot: Roact.FunctionComponent<UnitSlotProps> = (props) => {
	const [style, setStyle] = useGroupMotor({
		size: 0,
	});

	const viewportRef = useRef<ViewportFrame>();
	const camera = new Instance("Camera");
	const worldModel = new Instance("WorldModel");

	useEffect(() => {
		task.delay(0, () => {
			setStyle({
				size: new Spring(1, {
					frequency: 2,
				}),
			});
		});

		const ItemModel = props.Item.Clone();

		const viewport = viewportRef.getValue()!;
		worldModel.Parent = viewport;
		camera.Parent = viewport;
		viewport.CurrentCamera = camera;

		ItemModel.PivotTo(new CFrame(0, 0, 0));
		camera.CFrame = new CFrame(
			new Vector3(2.1, 2, -5),
			ItemModel.GetPivot().Position
		);

		ItemModel.Parent = Workspace; // Only way for the Animation to load without error?
		const humanoid = ItemModel.FindFirstChildWhichIsA("Humanoid")!; // Lord forgive me for using !

		ItemModel.Parent = worldModel;

		// cleanup
		return () => {
			ItemModel.Destroy();
		};
	}, []);

	function createVPF(MeshPart: MeshPart) {
		print(MeshPart);
		return undefined;
	}

	return (
		<imagebutton
			ZIndex={4}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderSizePixel={0}
			Image="rbxasset://textures/ui/GuiImagePlaceholder.png"
			ImageTransparency={1}
			Size={style.map(({ size }) =>
				UDim2.fromScale(0.28500000000000003 * size, 1 * size)
			)}
			// Size={new UDim2(0.28500000000000003, 0, 1, 0)}
			Event={{
				MouseButton1Down: (rbx, x, y) => {
					let Connection: RBXScriptConnection;
					GameBindables.Game.StartMouseCarry.Fire(props.Item.Name);

					Connection = UserInputService.InputEnded.Connect(function (
						input
					) {
						if (
							input.UserInputType ===
							Enum.UserInputType.MouseButton1
						) {
							GameBindables.Game.EndMouseCarry.Fire(
								props.Item.Name
							);
							Connection.Disconnect();
						}
					});
				},
			}}
		>
			<UICorner CornerRadius={1} />
			<viewportframe
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Size={new UDim2(1, 0, 1, 0)}
				Ref={viewportRef}
				ZIndex={5}
			>
				<uiaspectratioconstraint />
			</viewportframe>
			<UIStroke
				Color={Color3.fromRGB(152, 220, 255)}
				Thickness={6}
				LineJoinMode={Enum.LineJoinMode.Round}
			/>
			<textlabel
				Key="Price"
				ZIndex={5}
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				Position={new UDim2(0, 0, 0.8210000000000001, 0)}
				Size={new UDim2(1, 0, 0.2, 0)}
				Text="$50"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
			>
				<UIStroke Thickness={1} />
			</textlabel>

			<uiaspectratioconstraint />
		</imagebutton>
	);
};

export default withHooks(UnitSlot);
