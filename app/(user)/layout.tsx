import Navbar from "../../components/Navbar";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="md:flex md:justify-center">
      <body className="md:w-3/4 min-h-screen bg-klara-pink">
        {" "}
        <header>
          <Navbar />
        </header>
        <div className="flex justify-center">
          <div className="w-2/3 pb-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
