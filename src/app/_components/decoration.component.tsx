'use client';

import { useElementPosition } from '@/hooks/use-element-position';
import { useWindowSize } from '@/hooks/use-window-size';
import { MAIN_CONTENT_WIDTH } from '@/util/sizes';
import { motion } from 'framer-motion';
import { type FC, Fragment, useRef } from 'react';

const DECORATION_OFFSET = 50;
const DECORATION_OPACITY = 0.5;

export const Decoration: FC = () => {
	/** Hooks */
	const windowSize = useWindowSize();
	const cornerRef = useRef<HTMLDivElement>(null);
	const position = useElementPosition(cornerRef);

	/** Render */
	return (
		<Fragment>
			<div ref={cornerRef} key={windowSize.width} />
			<motion.div
				className="sm:block top-0 left-0 absolute hidden bg-primaryGray-900 w-screen h-[1px]"
				style={{ opacity: DECORATION_OPACITY }}
				animate={{ translateY: position.top - DECORATION_OFFSET }}
				transition={{ duration: 0, ease: 'linear' }}
			/>
			<motion.div
				className="sm:block top-0 left-0 fixed hidden bg-primaryGray-900 w-[1px] h-screen"
				animate={{ translateX: position.left - DECORATION_OFFSET * 1.5 }}
				style={{ opacity: DECORATION_OPACITY }}
				transition={{ duration: 0, ease: 'linear' }}
			/>
			<motion.div
				className="sm:block top-0 left-0 fixed hidden bg-primaryGray-900 w-[1px] h-screen"
				animate={{
					translateX:
						position.left + MAIN_CONTENT_WIDTH + DECORATION_OFFSET * 1.5,
				}}
				style={{ opacity: DECORATION_OPACITY }}
				transition={{ duration: 0, ease: 'linear' }}
			/>
		</Fragment>
	);
};
