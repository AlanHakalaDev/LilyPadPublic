import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/CS386Team6/CS386_Team_6_Project">LilyPad!</a>
        </h1>

        <p className={styles.description}>
          Placeholder Text
        </p>

        <div className={styles.grid}>
          <a id="createAccount" href="account-creation" className={styles.card}>
            <h3>Create an Account &rarr;</h3>
            <p>Get started making playlists, listening, and finding favorites.</p>
          </a>

          <a href="login" className={styles.card}>
            <h3>Log In &rarr;</h3>
            <p>Already have an account? Get back to the music here.</p>
          </a>

          <a
            href="search"
            className={styles.card}
          >
            <h3>Search &rarr;</h3>
            <p>Discover the songs available on LilyPad.</p>
          </a>

          <a
            href="playlists"
            className={styles.card}
          >
            <h3>Playlists &rarr;</h3>
            <p>
              Find similar tastes by exploring other listeners' playlists.
            </p>
          </a>
        </div>
      </main>

      <footer>
          Powered by caffeine and late-night motivation
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid rgb(50, 50, 50);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
