import Roact from "@rbxts/roact";

interface TemplateProps {
	name: string;
}

export default function Template(props: TemplateProps) {
	return (
		<textbutton
			Text={`Hello, ${props.name}`}
			TextSize={22}
			Font={Enum.Font.Gotham}
			Event={{ MouseButton1Click: () => print("Click!") }}
		/>
	);
}
