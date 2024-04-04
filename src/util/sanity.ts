import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import moment from 'moment';
import { createClient } from 'next-sanity';
import type { Content, Run, Social } from 'types/sanity';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: moment().format('YYYY-MM-DD'),
});

/** Functions */
export async function fetchSanityImage(image: SanityImageSource | undefined) {
    if (!image) return '';
    return imageUrlBuilder(client).image(image).url();
}

export async function getRecentRuns(): Promise<Run[]> {
    return await client.fetch(
        `*[_type == "run"] | order(date desc) {name, link, date, location, distance, time, elevation, description, image}`,
    );
}

export async function getSocials(): Promise<Social[]> {
    return await client.fetch(`*[_type == "social"]`);
}

export async function getContent(
    type: Content['type'],
): Promise<Content | undefined> {
    const contents: Content[] = await client.fetch(
        `*[_type == "content" && type == "${type}"]`,
    );
    return contents[0];
}
