import { Copyright } from "@/components/copyright";
import { Socials } from "@/components/socials";
import { portableTextComponents } from "@/util/portable-text";
import { getContent } from "@/util/sanity";
import { MAIN_CONTENT_WIDTH } from "@/util/sizes";
import { PortableText } from "@portabletext/react";
import { Content } from "./_components/content.component";
import { Decoration } from "./_components/decoration.component";
import { PaperMeta } from "./_components/paper-meta.component";
import { Uses } from "./_components/uses.component";

export const revalidate = 3600;

export default async function Home() {
	/** Fetch */
	const caption = await getContent("caption");

	/** Fallback */
	if (!caption?.contentDescription) return <div />;

	/** Render */
	return (
		<main className="flex justify-center pt-[10vh] sm:pt-[25vh] w-screen min-h-[100vh]">
			<Decoration />
			<Socials />
			<div
				className="flex flex-col gap-4 max-w-[90vw]"
				style={{ width: MAIN_CONTENT_WIDTH }}
			>
				<PaperMeta />
				<h1>PRSHL</h1>
				<PortableText
					value={caption.contentDescription}
					components={portableTextComponents}
				/>
				<hr />
				<Content />
				<hr />
				<Uses />
				<hr />
				<Copyright />
			</div>
		</main>
	);
}
