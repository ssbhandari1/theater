import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideBaar from "@/components/sidebaar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="box-border">
        <Providers>
          <main className="flex items-center min-h-screen p-4 flex-col  bg-slate-950">
            <div className="w-full h-full flex flex-col items-center gap-8 relative">
              {/* <div className="w-full h-full bg-slate-800 rounded-md pl-4  pr-4  text-white">
              <Header />
            </div> */}
              {children}
              <div className="w-[10vw] bg-gradient-to-l from-transparent to-[#2e343f] fixed top-0 left-0 h-[100vh]">
                <SideBaar />
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
