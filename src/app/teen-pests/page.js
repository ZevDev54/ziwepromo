import Image from "next/image";


// import Image from "react"

import styles from "./style.module.scss";

import { Squada_One } from 'next/font/google';

// import DurnstonBanner from '@images/durnston/DirkHouseCroppedForBanner.jpg'
// import PowerfulPortrait from "/images/durnston/DirkDurnstonNoBackground.png"

const squada = Squada_One({
  subsets: ['latin'],
  weight: ['400'], // Specify the font weights you want to use
});




export default function Home() {
  return (
    <main>
      <h1 className={squada.className}>Teenage Pest Control</h1>
      <h2 className={squada.className}>Turn away teens... With excellent deals!</h2>
      <h2 className={squada.className}>This page is under cosntruction. Stay safe in the meantime!</h2>

    
    </main>
  );
}
