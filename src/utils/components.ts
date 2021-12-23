import { FunctionComponent } from "react";

interface DefaultProps {
	className?: string;
}

export type Component<Props = object> = FunctionComponent<DefaultProps & Props>;
