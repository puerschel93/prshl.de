import { useEffect, useState } from 'react';

export const useDebouncedValue = <T>(value: T, delay = 500): T => {
	/** State */
	const [debouncedValue, setDebouncedValue] = useState(value);

	/** Effect */
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};
