import { Tabs } from "@/components/tabs";
import type { FC } from "react";
import { RecentRuns } from "./recent-runs.component";
import { Uses } from "./uses.component";

export const Content: FC = () => {
	/** Render */
	return (
		<Tabs
			tabs={[
				{
					title: "Recent Runs",
					content: <RecentRuns />,
				},
				{
					title: "Uses",
					content: <Uses />,
				},
				"spacer",
			]}
		/>
	);
};
