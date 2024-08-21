import type { FC } from "react";
import { RecentRuns } from "./recent-runs.component";

export const Content: FC = () => {
	/** Render */
	return (
		<div className="flex flex-col">
			<p className="text-white">Recent Runs</p>
			<RecentRuns />
		</div>
	);
};
