import { Inter } from "next/font/google";
import styles from "./style.module.scss";
// import '../globals.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dirk Durnston Real Estate",
  description: "The best 0 bedroom, 1 bathroom dream properties from the best looking Real Estate Agent in Alberta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.background}>
      <body className={styles.background}>{children}</body>
    </html>
  );
}
