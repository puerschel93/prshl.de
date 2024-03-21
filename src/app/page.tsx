import { Divider } from '@/components/divider';
import { ContentLayout } from '@/components/layouts';
import { MouseInteraction } from '@/components/mouse';
import { Caption } from './_components/caption.component';
import { RecentRuns } from './_components/recent-runs.component';

export const revalidate = 3600;

export default async function Home() {
	return (
		<main className="flex justify-center w-screen h-screen">
			<ContentLayout>
				<h1 className="font-bold text-[4rem]">PRSHL</h1>
				<Caption />
				<div className="inline">
					<p className="text-zinc-400">
						Currently, I am working at Menke Gerüstbau GmbH to develop a system
						for a digital workforce management and training for my first{' '}
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
