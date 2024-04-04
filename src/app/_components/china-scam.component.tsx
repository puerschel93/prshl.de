'use client';

import { Tooltip } from '@/components/tooltip';
import { type FC } from 'react';

export const ChinaScam: FC = () => {
    /** Render */
    return (
        <Tooltip label="Chinese for: I dont know chinese.">
            <span className="text-primaryGray-700 cursor-pointer">不会</span>
        </Tooltip>
    );
};
