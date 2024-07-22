import { getUses } from "@/util/sanity";
import type { FC } from "react";

export const Uses: FC = async () => {
	const uses = await getUses();

	/** Render */
	return (
		<p>TBF</p>
	)
};
