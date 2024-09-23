import { Footer, NavBar } from "@/components";
import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

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
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
