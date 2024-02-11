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
        "⚡ Learn how to tokenize your biz or your physical real estate portfolio. ",
        "🏢 Learn how to sell blockchain real estate to earn 10% commission.",
        "⚡ Play a game in MetaVegas and win instant payouts directly in your crypto wallet.",
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
        <span className={styles.luv}>LUV</span>
        <span className={styles.nft}>NFT</span>
        </h1>

        <p className={styles.description}>
          <code
            className={`${styles.code} dark:bg-black`}
            id="typing-element"
          ></code>
        </p>

        <div className={styles.grid}>
          <Link href="https://linktr.ee/maticluv">
            <a className={styles.card}>
              <h2>🟪 POLYGON &rarr;</h2>
              <p>
                We made learning blockchain fun with a game called TOKENOPOLY 
                that you own, subscribe to our PPV Discord. Buy and sell a 🟪 LNE.
                Search a companies [NAME].LUV trust account to see if they have a heart.
              </p>
            </a>
          </Link>

          <Link href="https://linktr.ee/satsluv">
            <a className={styles.card}>
              <h2>🟧 BITCOIN &rarr;</h2>
              <p>
                Learn how to sell TOKENOPOLY digital real estate and earn Bitcoin.
                Learn how to tokenize your physical real estate and accept Bitcoin ($RNT).
                Try our Bitcoin social media, games and tools.
              </p>
            </a>
          </Link>

          <Link href="https://linktr.ee/ethluv">
            <a className={styles.card}>
              <h2>🟦 ETHEREUM &rarr;</h2>
              <p>
                Buy or learn how to sell a LNE Las Vegas casino, which is the hottest physical 
                location in the world right now with everyone talking about the Super Bowl. 
                Use the scribETH tool to create an NFT.
              </p>
            </a>
          </Link>

          <Link href="https://linktr.ee/solluv">
            <a className={styles.card}>
              <h2>⬛ SOLANA &rarr;</h2>
              <p>
                MetaVegas is a decentralized online social casino for the good of rewarding affiliates. 
                Buy a BLK 5DSTORY MONTH or a Philly 5D LUVR Barber. Use SOLEYE explorer to research 
                any Solana token.
              </p>
            </a>
          </Link>

          <Link href="https://linktr.ee/luvnft" passHref>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>🚀 LUV NFT &rarr;</h2>
              <p>
                LUV NFT, powered by BLK LUV [ORG], solved some of the most challenging issues in humanity. 
                One of these is the ability to identify individuals who are committed to ending systemic 
                racism. We solved the issue of Diversity, Equity, and Inclusion (DEI) and Racial Equality 
                & Justice missing pledges and more.
              </p>
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
          Made with ❤️ NFT
        </a>
      </footer>
    </div>
  );
};

export default Home;
