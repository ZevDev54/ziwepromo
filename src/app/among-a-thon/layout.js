import { Inter } from "next/font/google";
import styles from "./style.module.scss";
// import '../globals.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amongathon Official Event",
  description: "Amongathon: indulge in the sus!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.background}>
      <body className={`${styles.body}`}>{children}</body>
    </html>
  );
}
