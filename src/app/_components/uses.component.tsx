import { UsesItem } from "@/components/uses-item";
import { getUses } from "@/util/sanity";
import type { FC } from "react";

export const Uses: FC = async () => {
	const uses = await getUses();

	/** Render */
	return (
		<div className="flex flex-col">
			<p className="text-white">Uses</p>
			{uses.map((item) => (
				<UsesItem key={item._id} item={item} />
			))}
		</div>
	);
};
