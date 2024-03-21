import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import moment from 'moment';
import { createClient } from 'next-sanity';
import { Run } from 'types/sanity';

const client = createClient({
	projectId: '7sjklu1k',
	dataset: 'production',
	useCdn: true,
	apiVersion: moment().format('YYYY-MM-DD'),
});

/** Functions */
export async function fetchSanityImage(image: SanityImageSource | undefined) {
	if (!image) return '';
	return await imageUrlBuilder(client).image(image).url();
}

export async function getRecentRuns() {
	return (await client.fetch(
		`*[_type == "run"] | order(date desc) {name, link, date, location, distance, time, elevation, description, image}`,
	)) as Run[];
}
