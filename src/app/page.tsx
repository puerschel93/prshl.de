import { Copyright } from "@/components/copyright";
import { Socials } from "@/components/socials";
import { portableTextComponents } from "@/util/portable-text";
import { getContent } from "@/util/sanity";
import { MAIN_CONTENT_WIDTH } from "@/util/sizes";
import { PortableText } from "@portabletext/react";
import { Content } from "./_components/content.component";
import { Decoration } from "./_components/decoration.component";
import { MainWrapper } from "./_components/main-wrapper.component";
import { PaperMeta } from "./_components/paper-meta.component";

export const revalidate = 1;

export default async function Home() {
	/** Fetch */
	const caption = await getContent("caption");

	/** Fallback */
	if (!caption?.contentDescription) return <div />;

	/** Render */
	return (
		<MainWrapper>
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
				<Copyright />
			</div>
		</MainWrapper>
	);
}
