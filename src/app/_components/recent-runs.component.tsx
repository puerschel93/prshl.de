import { getRecentRuns } from '@/util/sanity';
import type { FC } from 'react';

export const RecentRuns: FC = async () => {
	const runs = await getRecentRuns();

	/** Render */
	return <p>Recent runs</p>;
};
