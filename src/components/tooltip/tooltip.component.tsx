"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { type FC, useId } from "react";

/** Props Interface */
interface TooltipProps {
	children: React.ReactNode;
	label: string;
}

export const Tooltip: FC<TooltipProps> = ({ children, label }) => {
	/** Hooks */
	const renderId = useId();

	/** Render */
	return (
		<RadixTooltip.Provider>
			<RadixTooltip.Root>
				<RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
				<RadixTooltip.Portal>
					<AnimatePresence mode="wait">
						<RadixTooltip.Content sideOffset={8}>
							<motion.div
								key={renderId}
								className="border-primaryGray-900 bg-primaryGray-950 px-2 py-1 border rounded-md text-primaryGray-400 text-sm"
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.1 }}
							>
								{label}
							</motion.div>
						</RadixTooltip.Content>
					</AnimatePresence>
				</RadixTooltip.Portal>
			</RadixTooltip.Root>
		</RadixTooltip.Provider>
	);
};
