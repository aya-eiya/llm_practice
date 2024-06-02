import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bookshelf_0: {
          "0%": { transform: "scale(60%)", left: "9rem" },
          "100%": { transform: "scale(60%)", left: "18rem" },
        },
        bookshelf_1: {
          "0%": { transform: "scale(70%)", left: "4rem" },
          "100%": { transform: "scale(60%)", left: "9rem" },
        },
        bookshelf_2: {
          "0%": { transform: "scale(80%)", left: "1rem" },
          "100%": { transform: "scale70%)", left: "4rem" },
        },
        bookshelf_3: {
          "0%": { transform: "scale(100%)", left: "0rem" },
          "100%": { transform: "scale(80%)", left: "1rem" },
        },
        bookshelf_4: {
          "0%": { transform: "scale(80%)", right: "1rem" },
          "100%": { transform: "scale(100%)", right: "0rem" },
        },
        bookshelf_5: {
          "0%": { transform: "scale(70%)", right: "4rem" },
          "100%": { transform: "scale(80%)", right: "1rem" },
        },
        bookshelf_6: {
          "0%": { transform: "scale(60%)", right: "9rem" },
          "100%": { transform: "scale(70%)", right: "4rem" },
        },
        bookshelf_end: {
          "0%": { width: "0vh" },
          "100%": { width: "62vh" },
        },
      },
      animation: {
        bookshelf_0: "bookshelf_0 1s ease-in-out",
        bookshelf_1: "bookshelf_1 1s ease-in-out",
        bookshelf_2: "bookshelf_2 1s ease-in-out",
        bookshelf_3: "bookshelf_3 1s ease-in-out",
        bookshelf_4: "bookshelf_4 1s ease-in-out",
        bookshelf_5: "bookshelf_5 1s ease-in-out",
        bookshelf_6: "bookshelf_6 1s ease-in-out",
        bookshelf_end: "bookshelf_end 1s ease-in-out",
      },
    },
  },
} satisfies Config;
