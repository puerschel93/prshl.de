import type { Run as SanityRun } from "@/types/sanity";
import { dayjs } from "@/util/date";
import clsx from "clsx";
import type { FC } from "react";

/** Props Interface */
interface Props {
	run: SanityRun;
}

export const Run: FC<Props> = ({ run }) => {
	/** Computed */
	const isUpcoming = run.time === null;

	/** Render */
	return (
		<div
			className={clsx(
				"flex flex-col gap-2 border-primaryGray-800 py-16 not-last:border-b-[0.5px]",
				"hover:opacity-100 transition-opacity",
			)}
		>
			<div className="flex flex-row justify-between">
				<h3 className="max-w-[70%]">{run.name}</h3>
				<p className="text-right w-[30%] text-primary-500">
					{run.distance?.toFixed(1)} km
				</p>
			</div>
			<div className="flex flex-row justify-between mt-1">
				<p>{run.location}</p>
				<p>{run.time ?? "UPCOMING"}</p>
			</div>
			<p className="text-primary-500">{dayjs(run.date).format("YYYY-MM-DD")}</p>
			{run.description && <p>{run.description}</p>}
		</div>
	);
};
