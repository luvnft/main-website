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
        "⚡ We offer free spiritual healing health care!",
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
            href="https://github.com/Your-First-Open-Source-Project/main-website"
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
              <p>Find more information about our Web5 and the new purpose economy.</p>
            </a>
          </Link>

          <Link href="https://nftv.luvnft.com">
            <a className={styles.card}>
              <h2>Subscribe &rarr;</h2>
              <p>
                Subscribe to a NFTV network to join the reVULution and claim 100 $LUV.
              </p>
            </a>
          </Link>

          <Link href="https://zealy.io/c/luvnft/questboard">
            <a className={styles.card}>
              <h2>Quest &rarr;</h2>
              <p>
                Start your quest to find your purpose and earn $LUV.
              </p>
            </a>
          </Link>

          <Link href="https://name.luvnft.com">
            <a className={styles.card}>
              <h2>.LUV Name &rarr;</h2>
              <p>
                Create your free .LUV Web5 bank account name on testnet.
              </p>
            </a>
          </Link>

          <Link
            href="https://github.com/Your-First-Open-Source-Project"
            passHref
          >
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Blog(chain) &rarr;</h2>
              <p>Tell and sell your story on Near Blog(chain).</p>
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
          Made with ❤️ by 🤴🏾 The Wizard Hahz & Dr.Candy🫅🏽
        </a>
      </footer>
    </div>
  );
};

export default Home;
