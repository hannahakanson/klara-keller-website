"use client"

import ThemeContextProvider from "../../src/Contexts/ThemeContext";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import "../../src/styles/globals.css";

export const revalidate = 120; //Check for updates in CMS every 2 minutes

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-klara-pink dark">
      <body className="min-h-screen w-screen relative">
        <div className="overflow-x-hidden">
          {" "}
          <ThemeContextProvider>
            <header>
              <Navbar />
            </header>
            <div className="flex justify-center mb-40">
              <div className="w-full mt-4 flex justify-center">{children}</div>
            </div>
          </ThemeContextProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
