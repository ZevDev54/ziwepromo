import Image from "next/image";


// import Image from "react"

import styles from "./style.module.scss";

import PiratesBay from 'next/font/local';

// import DurnstonBanner from '@images/durnston/DirkHouseCroppedForBanner.jpg'
// import PowerfulPortrait from "/images/durnston/DirkDurnstonNoBackground.png"

const piratesBay = PiratesBay({
    src:'./PiratesBay.ttf'
});



export default function Home() {
  return (
    <main>
      <div className={styles.inspiringBanner}>

        <div className={styles.waveContainer} >
          <Image
            src="/images/northsea/OceanBackground.jpg"
            // fill={true}
            width={1523}
            height={857}

            // sizes="(max-width: 500px) 100vw, 800px"
            // srcSet="
            //   /images/durnston/DirkDurnston.jpg 500w,
            //   /images/durnston/DirkHouseCroppedForBanner.jpg 800w
            // "
            objectFit="contain"
            // layout="fill"
            className={styles.Banner}
            alt="A large wave">

              
          </Image>
        </div>


      </div>


      <div className={styles.topcardcontainer}>
        <h1 className={`${styles.header} ${piratesBay.className}`}>The North Sea</h1>
        <h2 className={styles.subheader}>NEEDS SALTY CREWMATES</h2>

        


        <div className={styles.housePicContainter}>

          <Image
            src="/images/durnston/potties/ScenicPotty1.jpg"
            width={612}
            height={406}

            objectFit="contain"
            className={styles.housePic}

            alt="A lovely hilltop property.">
          </Image>
          <Image
            src="/images/durnston/potties/ScenicPotty2.jpg"
            width={612}
            height={406}

            objectFit="contain"
            className={styles.housePic}

            alt="A lovely hilltop property.">
          </Image>
          <Image
            src="/images/durnston/potties/ScenicPotty3.jpg"
            width={612}
            height={406}

            objectFit="contain"
            className={styles.housePic}

            alt="A lovely hilltop property.">
          </Image>
        </div>
        <p className={styles.italics}>Partner with Pioneer Sanitation group.</p>
      </div>
    </main>
  );
}
