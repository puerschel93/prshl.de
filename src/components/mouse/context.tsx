"use client";

import { MouseState } from "@/app/layout";
import { FC, createContext, useContext, useState } from "react";

/** Interface */
interface IMouseContext {
  setMouseState: (state: MouseState | null) => void;
  mouseState: MouseState | null;
}

/** Context */
export const MouseContext = createContext<IMouseContext>({
  setMouseState: () => {},
  mouseState: null,
});

/** Hooks */
export const useMouseContext = () => {
  return useContext(MouseContext);
};

export const MouseProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  /** State */
  const [mouseState, setMouseState] = useState<MouseState | null>(null);

  /** Render */
  return (
    <MouseContext.Provider
      value={{
        mouseState,
        setMouseState,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};
