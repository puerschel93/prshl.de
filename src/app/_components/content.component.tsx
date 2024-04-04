import { Tabs } from '@/components/tabs';
import { type FC } from 'react';
import { PiCode, PiPersonSimpleRunFill } from 'react-icons/pi';
import { Projects } from './projects.component';
import { RecentRuns } from './recent-runs.component';

export const Content: FC = () => {
	/** Render */
	return (
		<Tabs
			tabs={[
				{
					title: 'Recent Runs',
					icon: <PiPersonSimpleRunFill />,
					content: <RecentRuns />,
				},
				{ title: 'Projects', icon: <PiCode />, content: <Projects /> },
			]}
		/>
	);
};
