import { Socials } from '@/components/socials';
import { Tabs } from '@/components/tabs';
import { portableTextComponents } from '@/util/portable-text';
import { getContent } from '@/util/sanity';
import { PortableText } from '@portabletext/react';
import { Projects } from './_components/projects.component';
import { RecentRuns } from './_components/recent-runs.component';

export const revalidate = 1;

export default async function Home({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const caption = await getContent('caption');

	if (!caption?.contentDescription) return <div />;

	/** Render */
	return (
		<main className="flex justify-center pt-[10vh] sm:pt-[45vh] w-screen h-screen">
			<Socials />
			<div className="flex flex-col gap-4 w-[650px] max-w-[90vw] transition-all">
				<h1 className="font-bold text-[3rem]">PRSHL</h1>
				<PortableText
					value={caption.contentDescription}
					components={portableTextComponents}
				/>
				<hr />
				<Tabs
					tabs={[
						{ title: 'Recent Runs', content: <RecentRuns /> },
						{ title: 'Projects', content: <Projects /> },
					]}
				/>
			</div>
		</main>
	);
}
