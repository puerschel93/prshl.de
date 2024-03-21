'use client';

import { useMouse } from '@/hooks/use-mouse';
import { isTouchDevice } from '@/util/misc';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useMouseContext } from './context';

export const Mouse: FC = () => {
	/** Context */
	const { x, y } = useMouse();
	const { mouseState } = useMouseContext();
	const [isClicking, setIsClicking] = useState(false);

	/** Computed */
	const isHovering = mouseState?.state === 'hover';

	/** Hooks */
	useEffect(() => {
		const handleOnMouseDown = () => setIsClicking(true);
		const handleOnMouseUp = () => setIsClicking(false);
		window.addEventListener('mousedown', handleOnMouseDown);
		window.addEventListener('mouseup', handleOnMouseUp);
	}, []);

	if (isTouchDevice()) return null;

	/** Render */
	return (
		<div
			className="top-0 left-0 fixed md:flex hidden bg-gradient-to-br from-slate-600 to-transparent opacity-50 border border-opacity-10 rounded-full w-4 pointer-events-none aspect-square"
			style={{
				left: 0,
				top: 0,
				transform: `translate(${x}px, ${y}px) scale(${
					isClicking ? 0.95 : isHovering ? 2 : 1
				})`,
				transition: 'transform 0.075s ease, scale 0.3s ease-in-out',
			}}
		/>
	);
};
