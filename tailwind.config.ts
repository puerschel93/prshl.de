import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        grtsk: ["var(--font-grtsk)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
