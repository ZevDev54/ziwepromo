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
    <main className={merriweather.className}>
      <div className={styles.inspiringBanner}>
        <Image
          src="/images/durnston/DirkHouseCroppedForBanner.jpg" 
          // fill={true}
          width={1843}
          height={676}

          // sizes="(max-width: 500px) 100vw, 800px"
          // srcSet="
          //   /images/durnston/DirkDurnston.jpg 500w,
          //   /images/durnston/DirkHouseCroppedForBanner.jpg 800w
          // "


          objectFit="contain"
          
          // priority

          // layout="fill"
          className={styles.Banner}

          alt="The one and only Dirk Durnston in his lovely home office.">
          </Image>

         


      </div>
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
        <h1 className={`${styles.header}`}>Dirk Durnston here.</h1>
        <h2 className={styles.subheader}>Ready for real estate action.</h2>
        <p className={styles.paragraph}>This page is under construction. The full Dirk Durnston experience is so close that we can smell it!</p>
        <p className={styles.italics}>Partner with Pioneer Sanitation group.</p>


      </div>
    </main>
  );
}
