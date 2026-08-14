import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "KinKeeper",
  description: "Keep your friendships alive with KeenKeeper.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  );
}
