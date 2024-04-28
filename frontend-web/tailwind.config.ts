import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      content: {
        "['A) ']": "var('A) ')",
        "['B) ']": "var('B) ')",
        "['C) ']": "var('C) ')",
        "['D) ']": "var('D) ')",
        "['E) ']": "var('E) ')",
      },
    },
  },
} satisfies Config;
