import Image from "next/image";
import styles from "./style.module.scss";
// import PowerfulPortrait from "/images/durnston/DirkDurnstonNoBackground.png"

export default function Home() {
  return (
    <main>
      <div className={styles.incrediblemancontainer}>
        <Image
        src="/images/durnston/DirkDurnston.jpg" 
        height={819/2}
        width={970/2}
        alt="The one and only Dirk Durnston."></Image>
      </div>
      <div className={styles.topcardcontainer}>
        <h1 className={styles.whitetext}>Dirk Durnston here.</h1>
        <h2 className={styles.whitetext}>Dream properties across Alberta.</h2>
        <p className={styles.description}>This page is under construction. You should be excited to be so close to getting to know Dirk Durnston.</p>


      </div>
    </main>
  );
}
