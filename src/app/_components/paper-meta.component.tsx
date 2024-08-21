import { generateRandomBuildNumber } from "@/util/strings";
import dayjs from "dayjs";
import type { FC } from "react";

export const PaperMeta: FC = () => {
	/** Computed */
	const buildNumber = generateRandomBuildNumber();

	/** Render */
	return (
		<div className="sm:flex flex-col items-end gap-2 hidden mb-36 self-end">
			<p className="font-mono text-xs">
				{dayjs().format("[Berlin], YYYY-MM-DD / hh:mm A")}
			</p>
			<p className="font-mono text-xs">{`Build # ${buildNumber}`}</p>
		</div>
	);
};
