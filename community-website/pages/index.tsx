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
        "⚡ We minted 1 trillion ONE $LUV tokens to unite humanity with a UBI! ",
        "💖 The value of $LUV is equivalent to one hour of time in your state!",
        "⚡ Accept Bitcoin $RNT for affordable real estate, products and services.",
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
<<<<<<< HEAD
              <h2>METAVEGAS &rarr;</h2>
              <p>A fair, simple, and decentralized social casino on the Solana blockchain. Purchase 
                Solana crypto $SOL or $USD via Stripe using a debit card to get started. Players receive 
                instant winnings in their Solana wallet. Join our 888 Metaverse. </p>
=======
              <h2>Y. &rarr;</h2>
                <p>
                Elevate to Web5 to learn how to barter $LUV and discover our solutions for the housing crisis, VC funding challenges,
                bridging the tech gap for unfunded businesses, fostering unity through $LUV, distinguishing a landlord from a LNElord,
                and accessing trusted online services. Do what you $LUV.
                </p>
>>>>>>> 8b0abbbab3f68b8e690165a2c62ee6a9540e00fc
            </a>
          </Link>

          <Link href="https://tokenopoly.luvnft.com">
            <a className={styles.card}>
<<<<<<< HEAD
              <h2>TOKENOPOLY &rarr;</h2>
              <p>A Monopoly like game for adults played on TikTok and IRL [IN REAL LIFE]. Follow 
              <a href="https://www.tiktok.com/@w3bars" target="_blank">@W3BARS</a> on TikTok for free ONE $LUV to play with. Spin our TikTok Effect LRG 
                [LNE ROULETTE GAME] wheel to play TOKENOPOLY. Buy 📉 and sell 📈
=======
              <h2>RNT. &rarr;</h2>
              <p>
              We solved the affordable housing crisis with a BRC-20 token called $RNT that allows hosts to set affordable rental prices and 
              landlords to accept Bitcoin for their rental properties. Promote a RNTal for free <a href="https://t.me/rntsat">Telegram</a>.
              Subscribe to <a href="https://luvgames.luvnft.com">Discord</a> as a LNElord to learn how to accept $RNT and get $RNT relief.
>>>>>>> 8b0abbbab3f68b8e690165a2c62ee6a9540e00fc
              </p>
            </a>
          </Link>

          <Link href="https://luvgames.luvnft.com">
            <a className={styles.card}>
<<<<<<< HEAD
              <h2>PPV DISCORD &rarr;</h2>
              <p>Join the LUV NFT Discord to discover how to onboard to Web5 as a business to tokenize 
                your offerings, as a broker to sell blockchain real estate earning 10% comm, or as a 
                landlord to tokenize your portfolio and accept Bitcoin $RNT.
=======
              <h2>LNE. &rarr;</h2>
              <p>
              A LNE (LUV NFT ESTATE) is a WEB5 address that you own as a digital asset within your crypto wallet.
              Each LNE is tethered to a physical location using a What3words address (e.g., ///lobster.beats.suckle).
              Through our Tokenopoly game, we educate LNE Biz, Brokers & Investors about LNE.
>>>>>>> 8b0abbbab3f68b8e690165a2c62ee6a9540e00fc
              </p>
            </a>
          </Link>

<<<<<<< HEAD
          <Link href="https://arvrtise.com">
            <a className={styles.card}>
              <h2>ARVRTISE &rarr;</h2>
              <p>The Web5 marketing that unites Pros, Brands, and Masterminds on a single PPV Discord 
                platform as the A-Team. Tokenize ad content. Use AI for resume scanning. Hire blockchain 
                masterminds for candidate interviews.
=======
          <Link href="https://metavegas.luvnft.com">
            <a className={styles.card}>
              <h2>METAVEGAS. &rarr;</h2>
              <p>
              A fair, simple and decentralized social charity casino on Solana blockchain. Join other players in the LUV NFT free 
              Discord <a href="https://discord.com/channels/910051231437819914/914993936957861978">Game Room</a> channel. Follow us 
              on Twitter <a href="https://twitter.com/metavegas888">@metavegas888</a> for exclusive metaverse club events. Gaming for good never looked so cool.
>>>>>>> 8b0abbbab3f68b8e690165a2c62ee6a9540e00fc
              </p>
            </a>
          </Link>

          <Link
            href="https://healxyz.com"
            passHref
          >
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
<<<<<<< HEAD
              <h2>HEALXYZ &rarr;</h2>
              <p>Access free spiritual healing on our @HEALXYZ TikTok, or join our HealXYZ PPV Discord for 
                selling spiritual services, dating and discussions. We also offer affordable HealXYZ plans 
                for corporate employees.</p>
=======
              <h2>LNELORD. &rarr;</h2>
              <p>
              We are teaching the world how to learn to invest in commercial real estate with our free game. The game
              funds a player account with $440,000 in play money, allowing users to explore investment properties at
              their own pace, starting in Atlanta (Dr. Martin Luther King home). Join our Discord as a LNElord and 
              join the LNElord channel to learn how to level up. Use our LNElord AR Filter on TikTok.
              </p>
>>>>>>> 8b0abbbab3f68b8e690165a2c62ee6a9540e00fc
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
