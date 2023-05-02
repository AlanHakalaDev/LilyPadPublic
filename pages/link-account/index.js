import Head from 'next/head';
import styles from '/styles/Home.module.css';
import { useEffect } from 'react';
import { setProfile } from '/functions/profile-display.js';
import NavBar from '../../functions/navBar-display';


export default function LinkAccount() {
  useEffect(() => {
    setProfile()

    const loggedInUserId = JSON.parse(sessionStorage.getItem("userId"))

    if (!loggedInUserId) {
      alert('You need to create an account to link accounts.')
    }

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <NavBar/>

      <main>
        <a id="userBox" hidden href="/profile" className={styles.userBox}>
          <img id="profilePic" src='/icon.png' alt="Profile Picture" />
          <div>
            <p id='usernameDisplay'>Username</p>
            <p id='emailDisplay'>Email</p>
          </div>
        </a>

        <p className={styles.description}>
          Choose a Platform to link an account with:
        </p>

        <div className={styles.grid}>
          <a id="linkYoutube" href="link-account/youtube" className={styles.card}>
            <h3>Youtube Music &rarr;</h3>
          </a>

          <a id="linkSpotify" href="link-account/spotify" className={styles.card}>
            <h3>Spotify &rarr;</h3>
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
          border-top: 1px solid #eaeaea;
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