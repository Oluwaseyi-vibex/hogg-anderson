"use client";
import { useState, useEffect } from "react";
import { MantineProvider, Button, Image } from "@mantine/core";
import { IconArrowRightCircle } from "@tabler/icons-react";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

import SplashScreen from "@/components/SplashScreen";
import Link from "next/link";
import { poppins } from "@/utils/font/fonts";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen setLoading={setLoading} />;

  return (
    <MantineProvider>
      <NavBar />
      {children}

      <div className="flex justify-around w-full bg-[#F5F5F5] items-center py-4 px-3 md:px-0">
        <h1 className="text-xs md:text-xl font-semibold">
          Get Started – See why our clients stay with us year after year.
        </h1>
        <Link href="/getInTouch">
          <Button rightSection={<IconArrowRightCircle />}>Contact Us</Button>
        </Link>
      </div>

      <div className="fixed bottom-60 right-0 flex items-center space-x-3 p-2 bg-white/20 rounded-l-md shadow-md z-50">
        <p
          className={`${poppins.className} text-lg font-semibold text-green-600`}
        >
          Send us a DM
        </p>
        <a href="https://wa.link/54pg2j" target="_blank">
          <Image src="/icons8-whatsapp.gif" alt="WhatsApp" width={50} />
        </a>
      </div>

      <Footer />
    </MantineProvider>
  );
}
