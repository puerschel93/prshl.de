import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const salmon = {
	50: "#fff1ee",
	100: "#fed4cc",
	200: "#feb8aa",
	300: "#fd9b87",
	400: "#fc7e65",
	500: "#fc7054",
	600: "#e3654c",
	700: "#ca5a43",
	800: "#974332",
	900: "#4c2219",
	950: "#2c110c",
}

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

export default {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                primary: colors.emerald,
                primaryGray: colors.neutral,
                salmon
            },
            fontFamily: {
                grtsk: ['var(--font-grtsk)', ...fontFamily.sans],
                mona: ['var(--font-monospace)', ...fontFamily.mono],
            },
        },
        patterns: {
            opacities: {
                100: "1",
                80: ".80",
                60: ".60",
                40: ".40",
                20: ".20",
                10: ".10",
                5: ".05",
            },
            sizes: {
                1: "0.25rem",
                2: "0.5rem",
                4: "1rem",
                6: "1.5rem",
                8: "2rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                32: "8rem",
            }
        }
    },
    plugins: [
        plugin(function ({ addVariant }: { addVariant: Function }) {
            addVariant('not-last', '&:not(:last-child)');
        }),
        require('tailwindcss-dotted-background'),
        require('tailwind-scrollbar'),
        require('tailwindcss-bg-patterns')
    ],
} satisfies Config;