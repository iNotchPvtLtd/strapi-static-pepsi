// components/LayoutWrapper.tsx
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { getHeaderData, getFooterData } from "@/lib/fetch"; // your data fetch function
import './../../styles/globals.css'
const inter = Inter({ subsets: ["latin"] });

export default async function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const headerData = await getHeaderData();
  const footerData = await getFooterData();


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar headerData={headerData} />
          <div>{children}</div>
          <Footer footerData={footerData}/>
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
