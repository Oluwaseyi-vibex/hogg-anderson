import { Footer, NavBar } from "@/components";
import "./globals.css";
// import "swiper/swiper-bundle.min.css";
import "@mantine/core/styles.css";

import { Button, Image, MantineProvider } from "@mantine/core";
import { IconArrowRightCircle } from "@tabler/icons-react";
import { Colors } from "@/utils/font/color";
import { poppins } from "@/utils/font/fonts";
import Link from "next/link";

export const metadata = {
  title: "Hogg Anderson",
  description:
    "A trusted accounting and business solutions firm specializing in inventory management outsourcing restaurants, lounge and hotel and others in hospitality industry. And extensive expertise to optimize your financial processes and enhance profitability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#333333] w-full h-full antialiased`}>
        <MantineProvider>
          <NavBar />
          {children}
          <div className="flex justify-around w-full h-fit p-8 bg-[#F5F5F5] items-center">
            <h1 className="text-xl font-semibold">
              Get Started - See why our clients stay with us year after year.
            </h1>
            <Link href={"/getInTouch"}>
              <Button rightSection={<IconArrowRightCircle />}>
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="flex space-x-3 fixed bottom-60 p-2 bg-white/20 rounded-l-md right-0 z-50 items-center shadow-md">
            <p
              className={`${poppins.className} text-lg font-semibold text-green-600 `}
            >
              Send us a dm
            </p>
            <a target="_blank" href={"https://wa.link/54pg2j"}>
              <Image
                src={"/icons8-whatsapp.gif"}
                alt=""
                w={50}
                bg={Colors.bg}
                className=""
              />
            </a>
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
