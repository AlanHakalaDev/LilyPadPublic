import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function search() {
  useEffect(() => {
    const queryString = window.location.search;
    if (queryString != '') {
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('title'))
    //TODO: make call to testRequest and render results
    // needs fields for title, artist, type, and, chosen sources.
    }
  }, []);

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
          Search Playlists or Songs:
        </p>
        <form action="/search">
          <label htmlFor="title">Name of Playlist or Song:</label><br/>
          <input type="text" autoComplete="off" id="title" name="title" placeholder="Title..." /><br/>
          <label htmlFor="artist">Name of Creator or Artist:</label><br/>
          <input type="text" autoComplete="off" id="creator" name="creator" placeholder="Maker..." />
          <p>Type of Search:</p>
          <input type="radio" id="playlist" name="type" value="playlist"/>
          <label htmlFor="playlist">Playlist</label><br/>
          <input type="radio" id="track" name="type" value="track"/>
          <label htmlFor="track">Track</label>
          <p>Platorms to Search:</p>
          <input type="checkbox" id="Spotify" name="Spotify" value="true"/>
          <label htmlFor="Spotify"> Spotify</label><br/>
          <input type="checkbox" id="Youtube Music" name="Youtube Music" value="true"/>
          <label htmlFor="Youtube Music"> Youtube Music</label><br/>
          <input type="checkbox" id="Apple Music" name="Apple Music" value="true"/>
          <label htmlFor="Apple Music"> Apple Music</label><br/><br/>
          <button className={styles.searchButton}>Search</button>
        </form>
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
