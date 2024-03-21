'use client';

import { MouseState } from '@/app/layout';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC, useRef, useState } from 'react';
import { useMouseContext } from './context';

/** Props Interface */
interface MouseInteractionProps {
	children: React.ReactNode;
	className?: string;
	hoverState?: Omit<MouseState, 'renderId'>;
	imageUrl?: string;
}

const defaultMouseState: Omit<MouseState, 'renderId'> = {
	state: 'hover',
	imageUrl: 'https://source.unsplash.com/random/1800x1000',
};

export const MouseInteraction: FC<MouseInteractionProps> = ({
	children,
	className,
	hoverState,
}) => {
	/** Context */
	const mouseContext = useMouseContext();

	/** Hooks */
	const ref = useRef<HTMLDivElement>(null);

	/** Functions */
	function handleOnMouseEnter() {
		const renderId = crypto
			.getRandomValues(new Uint32Array(1))[0]
			?.toString() as string;
		const newState = (hoverState ?? defaultMouseState) as typeof hoverState & {
			renderId: string;
		};
		newState.renderId = renderId;
		mouseContext.setMouseState(newState);
	}

	async function handleOnMouseLeave() {
		await new Promise((resolve) => setTimeout(resolve, 0));
		mouseContext.setMouseState(null);
	}

	const [randomSkew] = useState(Math.random() > 0.5 ? 'skewX' : 'skewY');

	/** Render */
	return (
		<motion.div
			ref={ref}
			className={clsx(
				'relative inline-block font-bold saturate-200 *:text-white',
				className,
			)}
			whileInView={{
				opacity: 1,
				scale: 1,
				skewX: 0,
				skewY: 0,
				transition: {
					duration: 0.15,
					ease: 'linear',
					times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
					repeat: 0,
				},
			}}
			whileHover={{
				opacity: [0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
				scale: [1, 1.1, 1, 1.1, 1, 1, 1.1, 1.1, 1, 1.1, 1, 1],
				[randomSkew]: [0, 5, 0, 5, 0, 0, 5, 5, -2, 5, 2, 0],
				transition: {
					duration: 0.35,
					ease: 'linear',
					times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
				},
			}}
			onHoverStart={handleOnMouseEnter}
			onHoverEnd={handleOnMouseLeave}
		>
			{children}
		</motion.div>
	);
};
