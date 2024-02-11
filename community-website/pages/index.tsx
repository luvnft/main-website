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
        "⚡ Play a game in MetaVegas and win instant payout directly in your crypto wallet.",
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
        <a
          href="https://luvnft.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        <span className={styles.luv}>IN LUV</span>
        <span className={styles.nft}>WE TRUST</span>
        </a>
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
                If you want to learn the TOKENOPOLY blockchain game that
                you own subscribe to our PPV Discord. Learn how to create 
                a free [YOUR NAME].LUV Web5 domain $LUV bank trust account 
                and claim your first free LNE [LUV NFT ESTATE]. 
              </p>
            </a>
          </Link>

          <Link href="https://linktr.ee/satsluv">
            <a className={styles.card}>
              <h2>🟧 BITCOIN &rarr;</h2>
              <p>
                Subscribe to our LUV NFT Discord as a Broker to learn how to 
                learn how to sell TOKENOPOLY digital real estate to earn Bitcoin.
                Subscribe as a LNELORD to learn how to tokenize your physical real
                estate and accept Bitcoin $RNT. Explore Pix the Web5 Bitcoin IG.

              </p>
            </a>
          </Link>

          <Link href="https://linktr.ee/ethluv">
            <a className={styles.card}>
              <h2>🟦 ETHEREUM &rarr;</h2>
              <p>
                Buy or learn how to sell a Vegas casino LNE which is the hottest IRL 
                [IN REAL LIFE] physical location in the world right now with everyone
                talking about the Superbowl. Use the scribETH inscripton tool to create 
                an NFT. 1 $ETH just crossed the $2500 mark in value.
              </p>
            </a>
          </Link>

          <Link href="https://linktr.ee/solluv">
            <a className={styles.card}>
              <h2>⬛ SOLANA &rarr;</h2>
              <p>
                The hottest and most talked-about online casino gaming platform is MetaVegas.
                Bet with $SOL or $USD, with all winnings going directly into your Phantom wallet.
                Buy a BLK 5DSTORY MONTH or a Philly 5D LUVR Barber Jawn on the Solana blockchain.
                Use our SOLEYE explorer to research any Solana token or NFT portfolio.
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
                racism. We solved the issue of Diversity, Equity, and Inclusion (DEI) by enabling companies 
                to tokenize their staff. We also addressed the problem of missing Racial Equality & Justice 
                pledges by tokenizing Proof of Pledges. By tokenizing our commitments, we can build trust 
                and accountability.
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
          Made with ❤️ by The Wizard Hahz x Dr.Candy IN LUV WE TRUST
        </a>
      </footer>
    </div>
  );
};

export default Home;
