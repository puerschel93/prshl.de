"use client";

import { AnimatePresence } from "framer-motion";
import { FC } from "react";

/** Props Interface */
interface MouseStateRendererWrapperProps {
  children: React.ReactNode;
}

export const MouseStateRendererWrapper: FC<MouseStateRendererWrapperProps> = ({
  children,
}) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};
