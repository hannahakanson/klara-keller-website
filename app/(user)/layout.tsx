import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="md:flex md:justify-center bg-klara-pink">
      <body className="md:w-3/4 min-h-screen bg-klara-pink">
        {" "}
        <header>
          <Navbar />
        </header>
        <div className="flex justify-center">
          <div className="w-full mt-4 px-10 md:w-2/3">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
