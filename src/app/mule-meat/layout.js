
import styles from "./style.module.scss";
// import '../globals.scss'


export const metadata = {
  title: "Mule Meat Specialty Butchery",
  description: "Satisfy your craving!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.background}>
      <body className={`${styles.body}`}>{children}</body>
    </html>
  );
}
