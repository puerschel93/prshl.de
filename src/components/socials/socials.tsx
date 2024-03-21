import { getSocials } from '@/util/sanity';
import Link from 'next/link';
import { FC } from 'react';
import type { IconType } from 'react-icons/lib';
import {
	TbBrandGithub,
	TbBrandInstagram,
	TbBrandX,
	TbRectangle,
} from 'react-icons/tb';
import { Social } from 'types/sanity';
import { MouseInteraction } from '../mouse';

export const Socials: FC = async () => {
	/** Functions */
	const socials = await getSocials();

	/** Render */
	return (
		<div className="top-0 right-0 z-[9999] fixed flex flex-row gap-6 backdrop-blur-sm md:backdrop-blur-none m-3 p-3 rounded-xl">
			{socials.map((social) => {
				const Icon = mapSocialNameToIcon(social.name) as IconType;
				if (!social.url) return null;
				return (
					<Link href={social.url} key={social._id} target="_blank">
						<MouseInteraction
							key={social._id}
							hoverState={{
								state: 'hover',
							}}
						>
							<Icon size={22} className="hover:stroke-primary-500" />
						</MouseInteraction>
					</Link>
				);
			})}
		</div>
	);
};

function mapSocialNameToIcon(social: Social['name']) {
	switch (social) {
		case 'x':
			return TbBrandX;
		case 'instagram':
			return TbBrandInstagram;
		case 'github':
			return TbBrandGithub;
		default:
			TbRectangle;
	}
}
