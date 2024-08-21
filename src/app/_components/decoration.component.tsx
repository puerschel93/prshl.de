import { type FC, Fragment } from "react";

const DECORATION_OPACITY = 1;

export const Decoration: FC = () => {
	/** Render */
	return (
		<Fragment>
			<div className="sm:block top-[calc(25vh-4rem)] left-0 absolute hidden bg-primaryGray-800 w-screen h-[1px]" />
			<div className="sm:block top-0 left-[calc((100vw-650px)/2-4rem)] fixed hidden bg-primaryGray-800 w-[1px] h-screen" />
			<div className="sm:block top-0 right-[calc((100vw-650px)/2-4rem)] fixed hidden bg-primaryGray-800 w-[1px] h-screen" />
		</Fragment>
	);
};
