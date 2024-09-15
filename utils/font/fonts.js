import { Inter, Lexend_Peta, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "fallback",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "fallback",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const lexendPeta = Lexend_Peta({
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "500", "600", "700"],
});
