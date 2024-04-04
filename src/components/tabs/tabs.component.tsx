'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { type FC, type ReactNode, useId, useState } from 'react';
import { EmptyTab } from './empty-tab.component';
import { TabList } from './tab-list.component';
import { TabPanel } from './tab-panel.component';

/** Props Interface */
export interface TabProps {
	layoutId: string;
}

export interface TabsProps {
	tabs: (Tab | 'spacer')[];
}

export interface Tab {
	title: string;
	content: ReactNode;
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
	/** State */
	const [containerHeight, setContainerHeight] = useState<number>(0);
	const [currentTab, setCurrentTab] = useState<string>(
		tabs[0] !== 'spacer'
			? tabs[0]?.title ?? ''
			: (tabs.find((tab) => tab !== 'spacer') as Tab | undefined)?.title ?? '',
	);
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
				className="mb-[10vh] overflow-hidden"
				initial={{ height: containerHeight }}
				animate={{ height: containerHeight }}
				transition={{ duration: 1.5, ease: 'circInOut' }}
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentTab}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<TabPanel
							key={currentTab}
							setContainerHeight={setContainerHeight}
							currentTab={currentTab}
						>
							{(
								tabs.find(
									(tab) => tab !== 'spacer' && tab.title === currentTab,
								) as Tab | undefined
							)?.content ?? <EmptyTab />}
						</TabPanel>
					</motion.div>
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
