import type { Uses } from "@/types/sanity";
import type { FC } from "react";
import { Use } from "./use.component";

/** Props Interface */
interface UsesItem {
	item: Uses;
}

export const UsesItem: FC<UsesItem> = ({ item }) => {
	return (
		<div className="flex flex-col gap-4">
			<h3>{item.category}</h3>
			<div className="flex flex-col gap-6">
				{item.items?.map((use) => (
					<Use use={use} key={use._key} />
				))}
			</div>
		</div>
	);
};
