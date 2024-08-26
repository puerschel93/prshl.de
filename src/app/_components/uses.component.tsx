import { UsesItem } from "@/components/uses-item";
import { getUses } from "@/util/sanity";
import { type FC, Fragment } from "react";

export const Uses: FC = async () => {
	const uses = await getUses();

	/** Render */
	return (
		<Fragment>
			<p>USES</p>
			{uses.map((item) => (
				<UsesItem key={item._id} item={item} />
			))}
		</Fragment>
	);
};
