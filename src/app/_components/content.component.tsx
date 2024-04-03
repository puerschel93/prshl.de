import { Tabs } from '@/components/tabs';
import { type FC } from 'react';
import { Projects } from './projects.component';
import { RecentRuns } from './recent-runs.component';

export const Content: FC = () => {
	/** Render */
	return (
		<Tabs
			tabs={[
				{ title: 'Recent Runs', content: <RecentRuns /> },
				{ title: 'Projects', content: <Projects /> },
			]}
		/>
	);
};
