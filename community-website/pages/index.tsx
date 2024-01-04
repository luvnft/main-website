import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";
import Link from "next/link";

const Home: NextPage = () => {
  const typed = useRef<null | Typed>(null);

  useEffect(() => {
    const options = {
      strings: [
        "⚡ We're investing 1 trillion One $LUV into Web5! ",
        "💖 $LUV is a UBI equivalent to one hour of time in your state!",
        "⚡ Accept our Bitcoin $RNT for real estate, products and services.",
      ],
      typeSpeed: 75,
      backSpeed: 75,
    };

    // #typing-element refers to the <code> rendered below
    typed.current = new Typed("#typing-element", options);

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>LUV NFT - WEB5</title>
        <meta name="description" content="YFOSP Community Website" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas
        id="confetti-canvas"
        className={`${styles.canvas} bg-white dark:bg-black`}
        style={{}}
      ></canvas>

      <main className={`${styles.main} text-black dark:text-white`}>
        <NavBar></NavBar>

        <h1 className={styles.title}>
          LUV{" "}
          <a
            href="https://luvnft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFT
          </a>
        </h1>

        <p className={styles.description}>
          <code
            className={`${styles.code} dark:bg-black`}
            id="typing-element"
          ></code>
        </p>

        <div className={styles.grid}>
          <Link href="https://y.luvnft.com">
            <a className={styles.card}>
              <h2>Y &rarr;</h2>
              <p>Why choose LUV NFT? Explore Web5 technology and spirituality news. Discover 
                how the purpose economy can benefit you and your business.</p>
            </a>
          </Link>

          <Link href="https://rnt.luvnft.com">
            <a className={styles.card}>
              <h2>$RNT &rarr;</h2>
              <p>
              Create affordable housing by accepting Bitcoin $RNT for rentals. Promote 
              RNTals on <a href="https://t.me/rntsat">Telegram</a> for free, without any middleman fees.
              </p>
            </a>
          </Link>

          <Link href="https://nftv.luvnft.com">
            <a className={styles.card}>
              <h2>NFTV &rarr;</h2>
              <p>
              Subscribe to a PPV (Pay per View) network to learn about Web5 or to own and promote 
              your biz without algorithms or middlemen fees.
              </p>
            </a>
          </Link>

          <Link href="https://healxyz.com">
            <a className={styles.card}>
              <h2>HEALXYZ &rarr;</h2>
              <p>
              Subscribe to the first spiritual metaverse for memes, higher learning, and finding your
              soulmate. Follow @HealXYZ ✨😂
              </p>
            </a>
          </Link>

          <Link
            href="https://arvrtise.com"
            passHref
          >
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>ARVRTISE &rarr;</h2>
              <p>Advertise your biz using advanced tech for an affordable monthly subscription cost. 
                Transform your followers or customers into your A-Team.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={`${styles.footer} text-black dark:text-white`}>
        <a
          href="https://tiktok.com/hahzcandy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by The Wizard Hahz &amp; Dr.Candy <br></br>
          &quot;IN LUV WE TRUST&quot;
        </a>
      </footer>
    </div>
  );
};

export default Home;
