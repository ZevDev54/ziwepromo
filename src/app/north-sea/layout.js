import { Inter } from "next/font/google";
import styles from "./style.module.scss";
// import '../globals.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "North Sea: Crewmates Needed",
  description: "We need the saltiest of sailors to brave the treacherous North Sea.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.background}>
      <body className={`${styles.body}`}>{children}</body>
    </html>
  );
}
