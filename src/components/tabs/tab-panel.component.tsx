import { useEffect, type FC } from "react";

/** Props Interface */
interface Props {
	children: React.ReactNode;
	setContainerHeight: (height: number) => void;
	currentTab: string;
}

export const TabPanel: FC<Props> = ({
	children,
	setContainerHeight,
	currentTab,
}) => {
	const id = `tab-panel-${currentTab}`;

	/** Effects */
	useEffect(() => {
		const clientHeight = document.getElementById(id)?.clientHeight ?? 0;
		setContainerHeight(Math.max(clientHeight, 100));
	});

	/** Render */
	return <div id={id}>{children}</div>;
};
