'use client';

import clsx from 'clsx';
import { FC } from 'react';

/** Props Interface */
interface TabListProps {
	tabTitles: string[];
	currentTab: string;
	setCurrentTab: (tab: string) => void;
}

export const TabList: FC<TabListProps> = ({
	tabTitles,
	currentTab,
	setCurrentTab,
}) => {
	/** Render */
	return (
		<div className="flex flex-row gap-4">
			{tabTitles.map((title, index) => {
				const isCurrentTab = title === currentTab;
				return (
					<p
						key={title}
						onClick={() => setCurrentTab(title)}
						className={clsx(
							'hover:text-white cursor-pointer text-sm',
							isCurrentTab ? 'text-white' : '',
						)}
					>
						{title}
					</p>
				);
			})}
		</div>
	);
};
