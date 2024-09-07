import Image from "next/image";


// import Image from "react"

import styles from "./style.module.scss";

import { Merriweather } from 'next/font/google';

// import DurnstonBanner from '@images/durnston/DirkHouseCroppedForBanner.jpg'
// import PowerfulPortrait from "/images/durnston/DirkDurnstonNoBackground.png"

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the font weights you want to use
});



export default function Home() {
  return (
    <main>

      {/* 
      <div className={styles.imageContainer}>
        <Image
          source={require}
          // fill={true}
          // objectFit="contain"
          // priority
          alt="The one and only Dirk Durnston in his lovely home office.">
          </Image>

      </div> */}

      {/* <div className={styles.incrediblemancontainer}>
        <Image
        src="/images/durnston/DirkDurnston.jpg" 
        height={819/2}
        width={970/2}
        alt="The one and only Dirk Durnston."></Image>
      </div> */}



      <div className={styles.topcardcontainer}>
        <h1 className={`${styles.header}`}>Among-A-Thon</h1>
        <h2 className={styles.subheader}>The official event.</h2>
        <h2 className={styles.subheader}>Go big or go Sus!</h2>

        <p className={styles.paragraph}>The crewmates are hard at work on this page!</p>
        {/* <p className={styles.italics}>Partner with Pioneer Sanitation group.</p> */}


      </div>
    </main>
  );
}
