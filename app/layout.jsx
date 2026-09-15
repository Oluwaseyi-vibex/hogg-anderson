import "./globals.css";
import { poppins } from "@/utils/font/fonts";
import ClientWrapper from "./ClientWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#333333] antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
