import { SanityValues } from "@/types/sanity";
import Image from "next/image";
import { FC } from "react";
import { MouseInteraction } from "../mouse";

/** Props Interface */
interface Props {
  run: SanityValues["run"];
}

export const Run: FC<Props> = ({ run }) => {
  /** Render */
  return (
    <div className="width-full flex flex-row items-start gap-4 border-b-2 border-dotted border-zinc-700 pb-4 last:border-b-0">
      <MouseInteraction>
        <div className="aspect-square w-24 bg-white">
          <Image
            src="https://source.unsplash.com/random/1800x1000"
            alt="random"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </MouseInteraction>
      <div className="flex flex-col gap-2">
        <p className="font-bold leading-none">BERLIN MARATHON 2024</p>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};
