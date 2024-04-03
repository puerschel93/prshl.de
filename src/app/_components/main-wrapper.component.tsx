'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

/** Props Interface */
interface Props {
	children: React.ReactNode;
}

export const MainWrapper: FC<Props> = ({ children }) => {
	return (
		<motion.main
			className="flex justify-center pt-[10vh] sm:pt-[45vh] w-screen"
			style={{ minHeight: '100vh' }}
		>
			{children}
		</motion.main>
	);
};
