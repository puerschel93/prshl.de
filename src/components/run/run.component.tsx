"use client";

import { dayjs } from "@/util/date";
import clsx from "clsx";
import type { FC } from "react";
import type { Run as SanityRun } from "types/sanity";

/** Props Interface */
interface Props {
	run: SanityRun;
}

export const Run: FC<Props> = ({ run }) => {
	// const sanityImage = useSanityImage(run.image?.asset._ref);

	/** Computed */
	const isUpcoming = run.time === null;

	/** Render */
	return (
		<div
			className={clsx(
				"flex flex-col gap-2 border-primaryGray-800 py-16 not-last:border-b-[0.5px]",
				isUpcoming ? "opacity-15" : "opacity-100",
				"hover:opacity-100 transition-opacity",
			)}
		>
			<div className="flex flex-row justify-between">
				<h2 className="max-w-[70%] font-bold text-left uppercase">
					{run.name}
				</h2>
				<p className="text-right w-[30%] text-primary-500">
					{run.distance?.toFixed(1)} km
				</p>
			</div>
			<div className="flex flex-row justify-between mt-1 *:text-sm">
				<p>{run.location}</p>
				<p>{run.time ?? "UPCOMING"}</p>
			</div>
			<p className="text-primary-500 text-sm">
				{dayjs(run.date).format("YYYY-MM-DD")}
			</p>
			{run.description && <p>{run.description}</p>}
		</div>
	);
};
