import { useState } from 'react';

export const useUpdate = () => {
	/** State */
	const [update, setUpdate] = useState(0);

	/** Functions */
	function updateHook() {
		setUpdate(update + 1);
	}

	return updateHook;
};
