import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
      fontFamily: {
        grtsk: ["var(--font-grtsk)", ...fontFamily.sans],
        mona: ["var(--font-monospace)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config;
