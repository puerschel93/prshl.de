"use client";

import type { ChildrenProps } from "@/util/misc";
import { ReactLenis } from "@studio-freight/react-lenis";
import type { FC } from "react";

export const Lenis: FC<ChildrenProps> = ({ children }) => {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.05,
			}}
		>
			{children}
		</ReactLenis>
	);
};
