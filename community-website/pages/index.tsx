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
        "⚡ Learn how to remove the middleman from your business to earn more. ",
        "💖 Receive a monthly ONE $LUV UBI income airdropped to your account.",
        "⚡ We minted 1 trillion ONE $LUV tokens to unite humanity with a UBI!",
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
          LUV NFT{" "}
          <a
            href="https://luvnft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            IN LUV WE TRUST
          </a>
        </h1>

        <p className={styles.description}>
          <code
            className={`${styles.code} dark:bg-black`}
            id="typing-element"
          ></code>
        </p>

        <div className={styles.grid}>
          <Link href="https://metavegas.luvnft.com">
            <a className={styles.card}>
              <h2>METAVEGAS &rarr;</h2>
              <p>
                A fair, simple, and decentralized social casino on the Solana
                blockchain. Purchase Solana crypto $SOL or $USD via Stripe using a
                debit card to get started. Players receive instant winnings in
                their Solana wallet. Join our 888 Metaverse.
              </p>
            </a>
          </Link>

          <Link href="https://tokenopoly.luvnft.com">
            <a className={styles.card}>
              <h2>TOKENOPOLY &rarr;</h2>
              <p>
                A Monopoly like game for adults played on TikTok and IRL [IN REAL
                LIFE]. Follow{" "}
                <a href="https://www.tiktok.com/@w3bars" target="_blank">
                  @W3BARS
                </a>{" "}
                on TikTok for free ONE $LUV to play with. Spin our TikTok Effect
                LRG [LNE ROULETTE GAME] wheel to play TOKENOPOLY. Buy 📉 and sell
                📈
              </p>
            </a>
          </Link>

          <Link href="https://luvgames.luvnft.com">
            <a className={styles.card}>
              <h2>PPV DISCORD &rarr;</h2>
              <p>
                Join the LUV NFT Discord to discover how to onboard to Web5 as a
                business to tokenize your offerings, as a broker to sell
                blockchain real estate earning 10% comm, or as a landlord to
                tokenize your portfolio and accept Bitcoin $RNT.
              </p>
            </a>
          </Link>

          <Link href="https://arvrtise.com">
            <a className={styles.card}>
              <h2>ARVRTISE &rarr;</h2>
              <p>
                The Web5 marketing that unites Pros, Brands, and Masterminds on a
                single PPV Discord platform as the A-Team. Tokenize ad content.
                Use AI for resume scanning. Hire blockchain masterminds for
                candidate interviews.
              </p>
            </a>
          </Link>

          <Link href="https://healxyz.com" passHref>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>HEALXYZ &rarr;</h2>
              <p>
                Access free spiritual healing on our @HEALXYZ TikTok, or join our
                HealXYZ PPV Discord for selling spiritual services, dating and
                discussions. We also offer affordable HealXYZ plans for corporate
                employees.
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
          Made with ❤️ by The Wizard Hahz &amp;amp; Dr.Candy IN LUV WE TRUST
          &lt;br&gt;&lt;br&gt;
        </a>
      </footer>
    </div>
  );
};

export default Home;
