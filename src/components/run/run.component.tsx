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
		<div className="flex flex-col gap-4 border-primaryGray-800 hover:opacity-80 py-4 not-last:border-b-[0.5px] cursor-default">
			<div className="flex flex-row justify-between">
				<h2 className="uppercase">{run.name}</h2>
				<p className="text-primary-500">{run.distance?.toFixed(1)} km</p>
			</div>
			<p className="line-clamp-2">{run.description}</p>
		</div>
	);
};
