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