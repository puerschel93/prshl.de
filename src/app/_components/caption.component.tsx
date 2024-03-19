"use client";

import { MouseInteraction } from "@/components/mouse";
import { FC, Fragment } from "react";

export const Caption: FC = () => {
  return (
    <Fragment>
      <div
        className="inline"
        style={{
          mixBlendMode: "difference",
        }}
      >
        <p>
          Salut, my name is Florian Pürschel. I am a software engineer from
          Berlin, Germany. I am passionate about{" "}
        </p>
        <MouseInteraction>
          <p>web development</p>
        </MouseInteraction>
        <p>, </p>
        <MouseInteraction>
          <p>running</p>
        </MouseInteraction>
        <p> and </p>
        <MouseInteraction>
          <p>design</p>
        </MouseInteraction>
        <p>.</p>
      </div>
    </Fragment>
  );
};
