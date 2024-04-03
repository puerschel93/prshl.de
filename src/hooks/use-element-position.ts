import { useEffect, useState } from 'react';

export const useElementPosition = (
	elementRef: React.RefObject<HTMLElement>,
	dependencies: any[] = [],
) => {
	/** State */
	const [elementPosition, setElementPosition] = useState({
		top: 0,
		left: 0,
	});

	/** Effect */
	useEffect(() => {
		function handlePosition() {
			if (elementRef.current) {
				const rect = elementRef.current.getBoundingClientRect();
				setElementPosition({
					top: rect.top,
					left: rect.left,
				});
			}
		}

		handlePosition();
		window.addEventListener('resize', handlePosition);
		return () => window.removeEventListener('resize', handlePosition);
	}, [elementRef, ...dependencies]);

	return elementPosition;
};
