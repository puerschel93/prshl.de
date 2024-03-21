'use client';

import { AnimatePresence } from 'framer-motion';
import type { FC } from 'react';

/** Props Interface */
interface MouseStateRendererWrapperProps {
	children: React.ReactNode;
}

export const MouseStateRendererWrapper: FC<MouseStateRendererWrapperProps> = ({
	children,
}) => {
	return (
		<AnimatePresence mode="wait">
			<div className="fixed inset-0 pointer-events-none">{children}</div>
		</AnimatePresence>
	);
};
