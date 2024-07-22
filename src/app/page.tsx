import { Copyright } from "@/components/copyright";
import { Socials } from "@/components/socials";
import { portableTextComponents } from "@/util/portable-text";
import { getContent } from "@/util/sanity";
import { MAIN_CONTENT_WIDTH } from "@/util/sizes";
import { generateRandomBuildNumber } from "@/util/strings";
import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";
import { ChinaScam } from "./_components/china-scam.component";
import { Content } from "./_components/content.component";
import { Decoration } from "./_components/decoration.component";
import { MainWrapper } from "./_components/main-wrapper.component";

export const revalidate = 3600;

export default async function Home() {
	/** Fetch */
	const caption = await getContent("caption");
	const buildNumber = generateRandomBuildNumber();

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
				<div className="sm:flex flex-col items-end gap-2 hidden mb-36 self-end">
					<p className="text-primaryGray-600 text-sm">
						{dayjs().format("[Berlin], YYYY-MM-DD / hh:mm A")}
					</p>
					<p className="text-primaryGray-600 text-sm">{`Build # ${buildNumber}`}</p>
				</div>
				<h1 className="inline-flex flex-row justify-between mb-8 font-bold text-[3rem]">
					PRSHL
					<ChinaScam />
				</h1>
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
