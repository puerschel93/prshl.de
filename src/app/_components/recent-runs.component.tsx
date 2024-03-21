import { Run } from '@/components/run';
import { getRecentRuns } from '@/util/sanity';
import type { FC } from 'react';

export const RecentRuns: FC = async () => {
	const runs = await getRecentRuns();

	/** Render */
	return (
		<div className="flex flex-col gap-6 pb-24">
			<h2 className="font-bold text-[1.5rem]">RUNNING EVENTS</h2>
			{runs.map((run) => (
				<Run key={run._id} run={run} />
			))}
		</div>
	);
};
