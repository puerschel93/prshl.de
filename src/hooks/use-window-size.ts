'use client';

import { useEffect, useState } from 'react';

export const useWindowSize = () => {
	/** State */
	const [windowSize, setWindowSize] = useState({
		width: typeof window === 'undefined' ? 0 : window?.innerWidth || 0,
		height: typeof window === 'undefined' ? 0 : window?.innerHeight || 0,
	});

	/** Effect */
	useEffect(() => {
		if (typeof window === 'undefined') return;
		function handleResize() {
			setWindowSize({
				width: window?.innerWidth || 0,
				height: window?.innerHeight || 0,
			});
		}
		window?.addEventListener('resize', handleResize);
		return () => {
			if (typeof window === 'undefined') return;
			window?.removeEventListener('resize', handleResize);
		};
	}, []);

	return windowSize;
};
