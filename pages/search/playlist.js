import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react'
import { setProfile } from '/functions/profile-display.js'

export default function PlaylistSearch() {
  useEffect(() => {
    setProfile()
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(queryString)
    console.log(urlParams)
    if (urlParams == {}) {
      
      const requestBody = { 
        "track": urlParams.get('title'),
        "artist": urlParams.get('creator'),
        "type": "playlist",
        "sources":["spotify","youtube"]
      }
      fetch('https://musicapi13.p.rapidapi.com/search', {
            method: "POST",
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
              'X-RapidAPI-Host': 'musicapi13.p.rapidapi.com'
            },
            body: JSON.stringify(requestBody),
      }).then(response => {return response.json().then(body => {
      if (response.status === 200) {
        console.log(body)
        return body
      }
      else {
        throw body
      }
    })
    })
    }
  }, []);
    //console.log(makeRequest('POST', requestBody))
    //TODO: make call to testRequest and render results
    // needs fields for title, artist, type, and, chosen sources.

  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
      <a id="userBox" hidden href="profileEdit" className={styles.userBox}>
        <img src='/icon.png' alt="Profile Picture"/>
        <div>
        <p id='usernameDisplay'>Username</p>
        <p id='emailDisplay'>Email</p>
        </div>
        </a>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/CS386Team6/CS386_Team_6_Project">LilyPad!</a>
        </h1>

        <p className={styles.description}>
          Search results for playlists with the name: $NAME created by $ARTIST
        </p>
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