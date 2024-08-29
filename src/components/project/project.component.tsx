import clsx from "clsx";
import Image from "next/image";
import { type FC, Fragment } from "react";

export const Project: FC = () => {
	return (
		<Fragment>
			<Image
				fill
				src={`https://picsum.photos/400/600?random=${Math.random()}`}
				className={clsx(
					"relative z-0 cursor-pointer",
					"grayscale hover:grayscale-0 transition-all",
					"scale-100 hover:scale-[125%] ease-out",
					"rotate-0 hover:rotate-[8deg]",
				)}
				alt="Project"
				style={{
					objectFit: "cover",
				}}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-[-5%] from-black to-[150%] to-transparent pointer-events-none" />
			<p className="bottom-4 left-4 z-10 absolute">Hello</p>
		</Fragment>
	);
};
