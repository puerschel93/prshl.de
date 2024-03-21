import type { FC } from 'react';

export const Copyright: FC = () => {
	return (
		<div className="flex flex-col pb-8 w-full">
			<p className="text-xs self-center">
				&copy; {new Date().getFullYear()} Florian Pürschel
			</p>
		</div>
	);
};
