'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { type FC, type ReactNode, useState } from 'react';
import { TabList } from './tab-list.component';

/** Props Interface */
export interface TabProps {
	layoutId: string;
}

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
		<div className="flex flex-col flex-grow gap-4">
			<TabList
				tabTitles={tabs.map((tab) => tab.title)}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
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
		</div>
	);
};
