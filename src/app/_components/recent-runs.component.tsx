import { Run } from '@/components/run';
import { getRecentRuns } from '@/util/sanity';
import type { FC } from 'react';

export const RecentRuns: FC = async () => {
	const runs = await getRecentRuns();

	/** Render */
	return (
		<div className="flex flex-col">
			{runs.map((run) => (
				<Run key={run._id} run={run} />
			))}
		</div>
	);
};
