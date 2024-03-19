import { MouseInteraction } from "@/components/mouse";
import { FC } from "react";

export const Disclaimer: FC = () => {
  return (
    <div className="inline font-mono text-xs leading-relaxed">
      <p className="block text-zinc-600">disclaimer</p>
      <p>
        About this website. Some of the concepts in this portfolio are heavily
        inspired by the amazing work of{" "}
      </p>
      <MouseInteraction>
        <p>Nick DiMatteo</p>
      </MouseInteraction>
      <p>
        . I was inspired by his way to include brutalist design elements into a
        modern website. I also wanted to figure out interesting ways to include
        mouse interactions that cause effects on the entire page.
      </p>
    </div>
  );
};
