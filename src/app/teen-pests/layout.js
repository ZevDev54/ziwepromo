
import styles from "./style.module.scss";
// import '../globals.scss'


export const metadata = {
  title: "Teenage Pest Control",
  description: "Turn Away Teens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.background}>
      <body className={`${styles.body}`}>{children}</body>
    </html>
  );
}
