import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZIWE Small Business Promotion",
  description: "ZIWE strives to promote up-and-coming local busiensses by providing professional website services and physical marketing tactics, such as business cards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
