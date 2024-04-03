'use client';

import { useSanityImage } from '@/hooks/use-sanity-image';
import type { FC } from 'react';
import type { Run as SanityRun } from 'types/sanity';

/** Props Interface */
interface Props {
	run: SanityRun;
}

export const Run: FC<Props> = ({ run }) => {
	const sanityImage = useSanityImage(run.image?.asset._ref);

	/** Computed */
	const isUpcoming = run.time === null;

	/** Render */
	return (
		<div
			className="flex flex-col gap-2 border-primaryGray-800 hover:opacity-80 py-4 pl-3 not-last:border-b-[0.5px] cursor-default"
			style={{
				opacity: isUpcoming ? 0.25 : 1,
				cursor: isUpcoming ? 'wait' : 'default',
			}}
		>
			<div className="flex flex-row justify-between -ml-3">
				<h2 className="font-bold uppercase">{run.name}</h2>
				<p className="text-primary-500">{run.distance?.toFixed(1)} km</p>
			</div>
			<div className="flex flex-row justify-between mt-1 *:text-sm">
				<p>{run.location}</p>
				<p>{run.time}</p>
			</div>
			<p></p>
			<p className="line-clamp-4">{run.description}</p>
		</div>
	);
};
