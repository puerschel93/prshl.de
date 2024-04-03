'use client';

import { useEffect, useState } from 'react';

export const useMouse = () => {
	/** State */
	const [position, setPosition] = useState({ x: 0, y: 0 });

	/** Effects */
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const handleMouseMove = (event: MouseEvent) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};
		window?.addEventListener('mousemove', handleMouseMove);
		return () => {
			window?.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	/** Return */
	return position;
};
