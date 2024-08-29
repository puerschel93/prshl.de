import { Project } from "@/components/project";
import clsx from "clsx";
import type { FC } from "react";

const bentoGrid = [
	"sm:aspect-square",
	"sm:col-span-2",
	"sm:row-span-2",
	"sm:aspect-square",
	"sm:aspect-square",
	"sm:aspect-square",
	"sm:row-span-2",
	"sm:aspect-square",
	"sm:aspect-square",
];

export const Projects: FC = () => {
	return (
		<div className="flex flex-col">
			<p className="text-white">Projects</p>
			<div className="flex flex-col gap-0 sm:grid grid-cols-3 py-12">
				{bentoGrid.map((className, index) => (
					<div
						key={Math.random()}
						className={clsx(
							className,
							"bg-primaryGray-950 grid-image relative overflow-hidden",
						)}
					>
						<Project />
					</div>
				))}
			</div>
		</div>
	);
};
