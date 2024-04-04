'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { type Tab } from './tabs.component';

/** Props Interface */
interface TabListProps {
	tabs: Tab[];
	currentTab: string;
	setCurrentTab: (tab: string) => void;
}

export const TabList: FC<TabListProps> = ({
	tabs,
	currentTab,
	setCurrentTab,
}) => {
	/** Render */
	return (
		<div className="flex flex-row gap-4">
			{tabs.map(({ title, icon }) => {
				return (
					<motion.span
						key={title}
						className={clsx('flex flex-row gap-1.5 *:text-white')}
						animate={{
							opacity: currentTab === title ? 1 : 0.5,
						}}
					>
						<p
							onClick={() => setCurrentTab(title)}
							className={clsx('cursor-pointer text-sm')}
						>
							{title}
						</p>
					</motion.span>
				);
			})}
		</div>
	);
};
