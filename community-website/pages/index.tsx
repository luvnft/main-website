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
          <Link href="https://y.luvnft.com">
            <a className={styles.card}>
              <h2>Y. &rarr;</h2>
                <p>
                Elevate to Web5 to learn how to barter $LUV and discover our solutions for the housing crisis, VC funding challenges,
                bridging the tech gap for unfunded businesses, fostering unity through $LUV, distinguishing a landlord from a LNElord,
                and accessing trusted online services. Stay updated on new businesses joining Web5 and news on technology and spirituality.
                </p>
            </a>
          </Link>

          <Link href="https://rnt.luvnft.com">
            <a className={styles.card}>
              <h2>RNT. &rarr;</h2>
              <p>
              We solved the affordable housing crisis with a BRC-20 token called $RNT that allows hosts to set affordable rental prices and 
              landlords to accept Bitcoin for their rental properties. Promote RNTals for free <a href="https://t.me/rntsat">Telegram</a>.
              Subscribe to promote your RNTals in our <a href="https://luvgames.luvnft.com">Discord</a>.
              </p>
            </a>
          </Link>

          <Link href="https://nftv.luvnft.com">
            <a className={styles.card}>
              <h2>LNE. &rarr;</h2>
              <p>
              A LNE (LUV NFT ESTATE) is a WEB5 address that you own as a digital asset within your crypto wallet.
              Each LNE is tethered to a physical location using a What3words address (e.g., ///lobster.beats.suckle).
              Through our Tokenopoly game, we're educating LNE Biz, Brokers and Investors about virtual real estate 
              </p>
            </a>
          </Link>

          <Link href="https://metavegas.luvnft.com">
            <a className={styles.card}>
              <h2>METAVEGAS. &rarr;</h2>
              <p>
              A fair, simple and decentralized social charity casino on Solana. Join other players in the LUV NFT
              free Discord <a href="https://discord.com/channels/910051231437819914/914993936957861978">Game Room</a> channel.
              Follow us on Twitter <a href="https://twitter.com/metavegas888">metavegas888</a> for exclusive metaverse club events.
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
              <h2>LNELORD. &rarr;</h2>
              <p>
              We're teaching the world how to learn to invest in commercial real estate with our free game. The game
              funds a player account with $440,000 in play money, allowing users to explore investment properties at
              their own pace, starting in Atlanta (Dr. Martin Luther King home). Follow @LUVNFT on social media to
              join our live LNELORD sport events.
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
          Made with ❤️ by The Wizard Hahz &amp; Dr.Candy IN LUV WE TRUST <br></br>
        </a>
      </footer>
    </div>
  );
};

export default Home;
