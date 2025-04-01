import Image from "next/image";


// import Image from "react"

import styles from "./style.module.scss";

import PiratesBay from 'next/font/local';
import PirateScroll from 'next/font/local';

// import DurnstonBanner from '@images/durnston/DirkHouseCroppedForBanner.jpg'
// import PowerfulPortrait from "/images/durnston/DirkDurnstonNoBackground.png"

const piratesBay = PiratesBay({
    src:'../../../public/fonts/PiratesBay.ttf'
});
const pirateScroll = PirateScroll({
  src:'../../../public/fonts/PirateScroll.otf'
});



export default function Home() {
  return (
    <main>
      <div className={styles.inspiringBanner}>

          <Image
            src="/images/northsea/OceanBackground-skinny.jpg"

            width={1523}
            height={857}

            className={styles.Banner}
            alt="A large wave">

              
          </Image>


      </div>


      <div className={styles.topcardcontainer}>
        <h1 className={`${styles.header} ${piratesBay.className}`}>The North Sea</h1>
        <h2 className={`${styles.subheader} ${pirateScroll.className}`}>NEEDS SALTY CREWMATES</h2>

        <p className={`${styles.paragraph} ${pirateScroll.className}`}>

          The king and his men<br />Stole the queen from her bed<br />And bound her in her bones<br />The seas be ours<br />Beyond the powers<br />Where we will, we'll rule
          
          
          <br/> <br/>Yo, ho, all hands<br />Hoist the colours high<br />Heave ho, thieves and beggars<br />Never shall we die


          <br/><br/>Yo, ho, haul together<br />Hoist the colours high<br />Heave ho, thieves and beggars<br />Never shall we die
          
          <br/><br/>Yo, ho, haul together<br />Hoist the colours high<br />Heave ho, thieves and beggars<br />Never shall we die


        </p>
        


        <div className={styles.housePicContainter}>

          {/* <Image
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
          </Image> */}
        </div>
        {/* <p className={styles.italics}>Partner with Pioneer Sanitation group.</p> */}
      </div>
    </main>
  );
}
