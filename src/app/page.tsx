import { Divider } from "@/components/divider";
import { ContentLayout } from "@/components/layouts";
import { MouseInteraction } from "@/components/mouse";
import { Caption } from "./_components/caption.component";

export default async function Home() {
  return (
    <main className="flex justify-center w-screen h-screen">
      <ContentLayout>
        <h1 className="font-bold text-[4rem]">PRSHL</h1>
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
        <h2 className="font-bold text-[1.5rem]">RECENT RUNS</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <Divider />
        <div className="inline font-mono text-xs leading-relaxed">
          <p className="block text-zinc-600">disclaimer</p>
          <p>
            About this website. Some of the concepts in this portfolio are
            heavily inspired by the amazing work of{" "}
          </p>
          <MouseInteraction>
            <p>Nick DiMatteo</p>
          </MouseInteraction>
          <p>
            . I was inspired by his way to include brutalist design elements
            into a modern website. I also wanted to figure out interesting ways
            to include mouse interactions that cause effects on the entire page.
          </p>
        </div>
      </ContentLayout>
    </main>
  );
}
