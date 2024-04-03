import type { FC } from 'react';

export const Copyright: FC = () => {
	return (
		<div className="flex flex-col pb-8 w-10/12 self-center">
			<p className="text-center text-primaryGray-600 text-xs leading-relaxed self-center">
				&copy; {new Date().getFullYear()} Florian Pürschel
				<br />
				<br />
				<span className="mt-2">
					Text was written by ChatGPT because I am too lazy to write it myself.
					This comment was written by GitHub Copilot because I was even too lazy
					to write that myself.
				</span>
			</p>
		</div>
	);
};
