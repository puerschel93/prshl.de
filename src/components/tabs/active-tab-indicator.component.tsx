import { motion } from "framer-motion";
import type { FC } from "react";

/** Props Interface */
interface Props {
	renderId: string;
}

export const ActiveTabIndicator: FC<Props> = ({ renderId }) => {
	/** Render */
	return (
		<motion.div
			layoutId={renderId}
			className="-bottom-1 left-0 absolute bg-primary-500 w-[35%] h-[1px]"
		/>
	);
};
