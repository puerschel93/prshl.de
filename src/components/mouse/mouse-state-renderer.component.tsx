"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { useMouseContext } from "./context";

const MIN_OPACITY = 0;
const MAX_OPACITY = 0.1;
const ANIMATION_LENGTH = 12;

function getRandomOpacity() {
  return Math.random() > 0.5 ? MIN_OPACITY : MAX_OPACITY;
}

const animation = (mode: "init" | "exit") => ({
  opacity: Array.from({ length: ANIMATION_LENGTH })
    .map(() => getRandomOpacity())
    .concat([mode == "init" ? MAX_OPACITY : MIN_OPACITY]),
  transition: {
    duration: 0.35,
    ease: "linear",
    times: Array.from({ length: ANIMATION_LENGTH + 1 }).map(
      (_, i) => i / ANIMATION_LENGTH,
    ),
    repeat: 0,
  },
});

export const MouseStateRenderer: FC = () => {
  /** Context */
  const { mouseState } = useMouseContext();

  /** Render */
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={"mouse-state-renderer" + mouseState?.renderId ?? "none"}
        style={{ opacity: MIN_OPACITY }}
        initial={{ opacity: MIN_OPACITY }}
        animate={animation("init")}
        exit={animation("exit")}
        className="pointer-events-none fixed inset-10"
      >
        {mouseState?.renderId && (
          <Image
            src="https://source.unsplash.com/random/1800x1000"
            alt="random"
            layout="fill"
            objectFit="cover"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
