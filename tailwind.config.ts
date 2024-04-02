import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

export default {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				primary: colors.emerald,
				primaryGray: colors.neutral,
			},
			fontFamily: {
				grtsk: ['var(--font-grtsk)', ...fontFamily.sans],
				mona: ['var(--font-monospace)', ...fontFamily.mono],
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }: { addVariant: Function }) {
			addVariant('not-last', '&:not(:last-child)');
		}),
		require('tailwindcss-dotted-background'),
		require('tailwind-scrollbar'),
	],
} satisfies Config;
