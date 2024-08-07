import Image from "next/image";
import styles from './style.module.scss'
import './globals.scss'

export default function Home() {
  return (
    <main>
      <div className={styles.centerItems}>
        <h1 className="construction">This page is under construction!</h1>
        <h1>Welcome to ZIWE.</h1>
        <h2>We mean business.</h2>
        <p>Promoting small local businesses is what we do. We are dedicated to spreading the word for up-and-coming businesses by way of professional busienss cards, custom websites, posters, and more.</p>
      </div>
    </main>
  );
}
