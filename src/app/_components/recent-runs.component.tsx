import { Run } from "@/components/run";
import { FC } from "react";

export const RecentRuns: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[1.5rem] font-bold">RECENT RUNS</h2>
      <Run />
      <Run />
      <Run />
      <Run />
      <Run />
      <Run />
      <Run />
      <Run />
    </div>
  );
};
