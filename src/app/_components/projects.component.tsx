import { FC } from 'react';

export const Projects: FC = () => {
	return (
		<div className="flex flex-col">
			{Array.from({ length: 3 }).map((_, index) => (
				<p key={index} className="py-4 text-white">
					Project {index + 1}
				</p>
			))}
		</div>
	);
};
