"use client";

import { fetchSanityImage } from "@/util/sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useEffect, useState } from "react";

export function useSanityImage(image: SanityImageSource | undefined) {
	/** State */
	const [imageUrl, setImageUrl] = useState<string>("");

	/** Effects */
	useEffect(() => {
		async function fetchImage() {
			const url = await fetchSanityImage(image);
			setImageUrl(url);
		}

		// disable this line because awaiting is not required in useEffects.
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		if (image) fetchImage();
	}, [image]);

	/** Return */
	return imageUrl;
}
