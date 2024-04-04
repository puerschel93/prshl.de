'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { type FC, type ReactNode, useId, useState } from 'react';
import { TabList } from './tab-list.component';
import { TabPanel } from './tab-panel.component';

/** Props Interface */
export interface TabProps {
	layoutId: string;
}

export interface TabsProps {
	tabs: Tab[];
}

export interface Tab {
	title: string;
	content: ReactNode;
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
	/** State */
	const [containerHeight, setContainerHeight] = useState<number>(0);
	const [currentTab, setCurrentTab] = useState<string>(tabs[0]?.title ?? '');
	const renderId = useId();

	/** Render */
	return (
		<div className="flex flex-col flex-grow gap-4">
			<TabList
				tabs={tabs}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
				renderId={renderId}
			/>
			<motion.div
				className="overflow-hidden"
				initial={{ height: containerHeight }}
				animate={{ height: containerHeight }}
				transition={{ duration: 0.75, ease: 'easeInOut' }}
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentTab}
						className="pb-[10vh]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<TabPanel
							key={currentTab}
							setContainerHeight={setContainerHeight}
							currentTab={currentTab}
						>
							{tabs.find((tab) => tab.title === currentTab)?.content}
						</TabPanel>
					</motion.div>
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
