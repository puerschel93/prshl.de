'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { ActiveTabIndicator } from './active-tab-indicator.component';
import type { Tab } from './tabs.component';

/** Props Interface */
interface TabListProps {
    tabs: (Tab | 'spacer')[];
    currentTab: string;
    setCurrentTab: (tab: string) => void;
    renderId: string;
}

export const TabList: FC<TabListProps> = ({
    tabs,
    currentTab,
    setCurrentTab,
    renderId,
}) => {
    /** Render */
    return (
        <div className="flex flex-row gap-4">
            {tabs.map((tab) => {
                if (tab === 'spacer')
                    return <span className="flex-1" key={Math.random()} />;
                const { title } = tab;
                const isCurrentTab = currentTab === title;
                return (
                    <motion.span
                        key={title}
                        className={clsx(
                            'flex flex-row gap-1.5 *:text-white relative',
                        )}
                        animate={{
                            opacity: isCurrentTab ? 1 : 0.5,
                        }}
                    >
                        <p
                            onClick={() => setCurrentTab(title)}
                            onKeyUp={() => setCurrentTab(title)}
                            className={clsx('cursor-pointer text-sm')}
                        >
                            {title}
                        </p>
                        {isCurrentTab && (
                            <ActiveTabIndicator renderId={renderId} />
                        )}
                    </motion.span>
                );
            })}
        </div>
    );
};
