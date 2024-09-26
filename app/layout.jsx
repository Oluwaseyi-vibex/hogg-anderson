import { Footer, NavBar } from "@/components";
import "./globals.css";
import "@mantine/core/styles.css";

import { Button, MantineProvider } from "@mantine/core";
import { IconArrowRightCircle } from "@tabler/icons-react";

export const metadata = {
  title: "Hogg Anderson",
  description:
    "A trusted accounting and business solutions firm specializing in inventory management outsourcing restaurants, lounge and hotel and others in hospitality industry. And extensive expertise to optimize your financial processes and enhance profitability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#333333] w-full h-full  p-4 md:p-0  antialiased`}>
        <MantineProvider>
          <NavBar />
          {children}
          <div className="flex justify-around w-full h-fit p-8 bg-[#F5F5F5] items-center">
            <h1 className="text-xl font-semibold">
              Get Started - See why our clients stay with us year after year.
            </h1>

            <Button rightSection={<IconArrowRightCircle />}>Contact Us</Button>
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
