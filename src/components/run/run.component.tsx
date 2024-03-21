'use client';

import { fetchSanityImage } from '@/util/sanity';
import Image from 'next/image';
import { FC } from 'react';
import { Run as SanityRun } from 'types/sanity';
import { MouseInteraction } from '../mouse';

/** Props Interface */
interface Props {
	run: SanityRun;
}

export const Run: FC<Props> = async ({ run }) => {
	const sanityImage = await fetchSanityImage(run.image?.asset._ref);

	/** Render */
	return (
		<div className="flex flex-row items-start gap-4 border-zinc-700 pb-4 border-b-2 last:border-b-0 border-dotted width-full">
			<MouseInteraction
				hoverState={{
					state: 'hover',
					imageUrl: sanityImage,
				}}
			>
				<div className="bg-white w-24 aspect-square">
					<Image
						src={sanityImage}
						alt="random"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</MouseInteraction>
			<div className="flex flex-col gap-2">
				<div className="flex flex-row justify-between items-center">
					<p className="font-bold leading-none">{run.name}</p>
					<p className="font-mono text-sm">
						{run.time} / {run.distance?.toFixed(2)} km
					</p>
				</div>
				<hr className="border-zinc-700 mt-1 border-dashed" />
				<div className="flex flex-col gap-2 mt-1">
					<p className="font-mono text-primary-500">{run.location}</p>
					<p className="inline line-clamp-3">{run.description}</p>
				</div>
			</div>
		</div>
	);
};
