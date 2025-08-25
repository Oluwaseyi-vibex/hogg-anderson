import {
  Inter,
  Lexend_Peta,
  Poppins,
  Nanum_Gothic,
  Montserrat,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "fallback",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "fallback",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const nanum_Gothic = Nanum_Gothic({
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "700", "800"],
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
