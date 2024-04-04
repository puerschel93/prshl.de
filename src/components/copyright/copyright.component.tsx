import type { FC } from 'react';

export const Copyright: FC = () => {
    return (
        <div className="flex flex-col items-center gap-2 pb-8 w-10/12 text-center text-primaryGray-600 text-xs leading-relaxed self-center">
            <p>&copy; {new Date().getFullYear()} Florian Pürschel</p>
            <a
                href="https://creativecommons.org/licenses/by-nc/4.0/"
                target="_blank"
            >
                CC BY-NC 4.0
            </a>
        </div>
    );
};
