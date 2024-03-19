import { FC } from "react";
import { TbX } from "react-icons/tb";

export const Divider: FC = () => {
  return (
    <div className="flex flex-row items-center gap-1 *:border-zinc-500 w-full">
      <TbX size={9} className="fill-primary-500 stroke-primary-500" />
      <hr className="w-3/12" />
    </div>
  );
};
