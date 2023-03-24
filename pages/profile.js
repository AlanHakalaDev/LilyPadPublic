import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function Profile() {
  useEffect(() => {
  const userId = JSON.parse(sessionStorage.getItem('userId'))
  const endpoint = `/api/user/${userId}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  fetch(endpoint, options)
  .then((response) => {
  return response.json()
  }).then((data) => {
    document.getElementById("welcome").innerHTML = "Welcome, " + `${data.username}`
    document.getElementById("usernameDisplay").innerHTML = `${data.username}`
    document.getElementById("emailDisplay").innerHTML = `${data.email}`
    document.getElementById("profilePic").src = `${data.picture}`
  });

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
      <a  href="profileEdit" className={styles.userBox}>
        <img id="profilePic" src='/icon.png' alt="Profile Picture"/>
        <div>
        <p id='usernameDisplay'>Username</p>
        <p id='emailDisplay'>Email</p>
        </div>
        </a>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/CS386Team6/CS386_Team_6_Project">LilyPad!</a>
        </h1>

        <p className={styles.description} id="welcome" name="welcome">
          You've signed in!
        </p>

          <a
            href="search"
            className={styles.card}
            id="searchSongs"
          >
            <h3>Search &rarr;</h3>
            <p>Discover the songs available on LilyPad.</p>
          </a>

          <a
            href="playlists"
            className={styles.card}
            id="searchPlaylists"
          >
            <h3>Playlists &rarr;</h3>
            <p>
              Find similar tastes by exploring other listeners' playlists.
            </p>
          </a>
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
