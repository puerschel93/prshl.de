import type { FC } from 'react';
import type { LayoutProps } from './interface';

export const ContentLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative flex flex-col gap-4 mt-[5vh] md:mt-[40vh] mb-[10vh] w-[750px] max-w-[90vw]">
            {children}
        </div>
    );
};
