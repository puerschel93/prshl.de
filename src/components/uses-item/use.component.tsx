import type { Uses } from "@/types/sanity";
import type { FC } from "react";

/** Props Interface */
interface UseProps {
	use: Required<Uses>["items"][0];
}

export const Use: FC<UseProps> = ({ use }) => {
	return (
		<div className="flex flex-col gap-2 w-full">
			<h3 className="font-semibold text-left text-white uppercase">
				{use.name}
			</h3>
			<p>{use.description}</p>
		</div>
	);
};
