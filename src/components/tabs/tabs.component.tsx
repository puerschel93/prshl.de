'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FC, ReactNode, useState } from 'react';
import { TabList } from './tab-list.component';

/** Props Interface */
export interface TabsProps {
	tabs: {
		title: string;
		content: ReactNode;
	}[];
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
	/** State */
	const [currentTab, setCurrentTab] = useState<string>(tabs[0]?.title ?? '');

	/** Render */
	return (
		<div className="flex flex-col gap-4">
			<TabList
				tabTitles={tabs.map((tab) => tab.title)}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
			<motion.div className="overflow-x-hidden" animate={{ height: 'auto' }}>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentTab}
						className="pb-[10vh]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{tabs.find((tab) => tab.title === currentTab)?.content}
					</motion.div>
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
