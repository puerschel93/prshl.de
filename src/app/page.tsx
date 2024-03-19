import { Divider } from "@/components/divider";
import { ContentLayout } from "@/components/layouts";
import { MouseInteraction } from "@/components/mouse";
import { Caption } from "./_components/caption.component";
import { RecentRuns } from "./_components/recent-runs.component";

export default async function Home() {
  return (
    <main className="flex h-screen w-screen justify-center">
      <ContentLayout>
        <h1 className="text-[4rem] font-bold">PRSHL</h1>
        <Caption />
        <div className="inline">
          <p className="text-zinc-400">
            Currently, I am working at Menke Gerüstbau GmbH to develop a system
            for a digital workforce management and training for my first{" "}
          </p>
          <MouseInteraction>
            <p>marathon</p>
          </MouseInteraction>
          <p>.</p>
        </div>
        <Divider />
        <RecentRuns />
      </ContentLayout>
    </main>
  );
}
