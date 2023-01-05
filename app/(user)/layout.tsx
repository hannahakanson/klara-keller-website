import Navbar from "../../components/Navbar";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    
  return (
    <html className="md:flex md:justify-center">
      <body className="md:w-3/4">
        {" "}
        <header>
            <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
