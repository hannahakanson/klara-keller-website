import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/globals.css";

export const revalidate = 120; //Check for updates in CMS every 2 minutes

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-klara-pink">
      <body className="min-h-screen relative">
        {" "}
        <header>
          <Navbar />
        </header>
        <div className="flex justify-center mb-40">
          <div className="w-full mt-4 px-10 flex justify-center">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
