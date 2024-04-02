import { Socials } from '@/components/socials';

export const revalidate = 3600;

export default async function Home() {
	return (
		<main className="flex justify-center w-screen h-screen">
			<Socials />
		</main>
	);
}
