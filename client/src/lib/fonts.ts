import { Barlow, Quicksand } from "next/font/google";

export const primary = Quicksand({
  subsets: ["latin"],
});

export const secondary = Barlow({
  subsets: ["latin"],
  weight: "200",
});
