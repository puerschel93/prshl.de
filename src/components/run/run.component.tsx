'use client';

import { useSanityImage } from '@/hooks/use-sanity-image';
import { dayjs } from '@/util/date';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';
import type { Run as SanityRun } from 'types/sanity';
import { MouseInteraction } from '../mouse';

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
		<motion.div
			className="flex flex-row items-start gap-4 border-zinc-700 pb-4 border-b last:border-b-0 border-dashed width-full"
			animate={{ opacity: isUpcoming ? 0.5 : 1 }}
			whileHover={{ opacity: 1 }}
		>
			<MouseInteraction
				className="md:flex hidden"
				hoverState={{
					state: 'hover',
					imageUrl: sanityImage,
				}}
			>
				<div className="bg-white rounded-xl w-24 overflow-hidden aspect-square grayscale">
					<Image
						src={sanityImage}
						alt="random"
						layout="fill"
						objectFit="cover"
						className="rounded-md"
					/>
				</div>
			</MouseInteraction>
			<div className="flex flex-col gap-2">
				<div className="flex md:flex-row flex-col-reverse justify-between items-start md:items-center gap-2 md:gap-0">
					<p className="font-bold leading-none">{run.name}</p>
					<p className="text-sm">
						{dayjs(run.date).format('dddd, Do MMMM YYYY')}
					</p>
				</div>
				<div className="flex flex-col gap-2 mt-1">
					<div className="flex flex-row justify-between items-center font-mono">
						<p className="text-primary-500 text-sm uppercase">{run.location}</p>
						<p className="text-sm uppercase">
							{isUpcoming ? 'Upcoming' : run.time} / {run.distance?.toFixed(1)}{' '}
							km
						</p>
					</div>
					<div className="pt-2">
						<hr className="mb-3" />
						<p className="inline line-clamp-3">{run.description}</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
