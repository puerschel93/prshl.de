import { Run } from '@/components/run';
import { getRecentRuns } from '@/util/sanity';
import { FC } from 'react';

export const RecentRuns: FC = async () => {
	const runs = await getRecentRuns();

	/** Render */
	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-bold text-[1.5rem]">RECENT RUNS</h2>
			{runs.map((run) => (
				<Run key={run._id} run={run} />
			))}
		</div>
	);
};
