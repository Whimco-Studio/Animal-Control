import Roact from "@rbxts/roact";

interface TemplateProps {
	name: string;
}

interface TemplateState {
	stateName: string;
}

export default class Template extends Roact.Component<TemplateProps, TemplateState> {
	public constructor(props: TemplateProps) {
		super(props);

		this.state = {
			stateName: "Default",
		};
	}

	public render(): Roact.Element {
		return (
			<textbutton
				Text={`Hello, ${this.props.name}`}
				TextSize={22}
				Font={Enum.Font.Gotham}
				Event={{ MouseButton1Click: () => print("Click!") }}
			/>
		);
	}
}
