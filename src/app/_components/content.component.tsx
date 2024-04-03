import { Tabs } from '@/components/tabs';
import { FC, useId } from 'react';
import { Projects } from './projects.component';
import { RecentRuns } from './recent-runs.component';

export const Content: FC = () => {
	const layoutId = useId();

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
