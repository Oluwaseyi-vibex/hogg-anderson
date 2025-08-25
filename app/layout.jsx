"use client"; // This layout is a client component

import { useState, useEffect } from "react";
import { Footer, NavBar } from "@/components";
import "./globals.css";
import "@mantine/core/styles.css";
import { Button, Image, MantineProvider } from "@mantine/core";
import { IconArrowRightCircle } from "@tabler/icons-react";
import { poppins } from "@/utils/font/fonts";
import Link from "next/link";
import SplashScreen from "@/components/SplashScreen";
import { useRouter } from "next/navigation";

// Remove metadata export here

export default function RootLayout({ children }) {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/Home");
  // }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Hogg Anderson | Accounting & Business Solutions</title>
        <meta
          name="description"
          content="Empowering SMEs in Nigeria with expert financial services including bookkeeping, payroll, tax consulting, and management reporting."
        />
        <meta
          name="keywords"
          content="Hogg Anderson, accounting, hospitality, tax consulting"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph and Twitter Tags */}
        <meta
          property="og:title"
          content="Hogg Anderson | Accounting & Business Solutions"
        />
        <meta
          property="og:description"
          content="We help hotels, restaurants, and lounges streamline financial processes and enhance profitability."
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/your-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      <body
        className={`${poppins.className} bg-[#333333] w-full h-full antialiased`}
      >
        <MantineProvider>
          {loading ? (
            <SplashScreen setLoading={setLoading} />
          ) : (
            <div>
              <NavBar />
              {children}
              <div className="flex justify-around w-full h-fit md:px-0 md:py-0 py-4 px-3 font-light md:p-8 bg-[#F5F5F5] items-center">
                <h1 className="md:text-xl text-xs font-medium md:font-semibold">
                  Get Started - See why our clients stay with us year after
                  year.
                </h1>
                <Link href="/getInTouch">
                  <Button rightSection={<IconArrowRightCircle />}>
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="flex space-x-3 fixed bottom-60 p-2 bg-white/20 rounded-l-md right-0 z-50 items-center shadow-md">
                <p
                  className={`${poppins.className} text-lg font-semibold text-green-600`}
                >
                  Send us a DM
                </p>
                <a target="_blank" href="https://wa.link/54pg2j">
                  <Image
                    src="/icons8-whatsapp.gif"
                    alt="WhatsApp Icon"
                    width={50}
                  />
                </a>
              </div>
              <Footer />
            </div>
          )}
        </MantineProvider>
      </body>
    </html>
  );
}
