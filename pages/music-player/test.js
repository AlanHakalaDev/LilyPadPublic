import Head from 'next/head';
import styles from '/styles/Home.module.css';
import React, { useEffect } from 'react'
import { setProfile } from '/functions/profile-display.js'
import ReactPlayer from '/components/player.js'



export default function Player() {
  useEffect(() => {
    setProfile()


    const loggedInUserId = JSON.parse(sessionStorage.getItem("userId"))

    if (!loggedInUserId) {
      alert('You need to create an account to listen to songs.')
    }
    console.log(document.getElementById("prevButton").onclick)
    console.log(document.getElementById("nextButton").onclick)
  }, [])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
        <a id="userBox" hidden href="/profile" className={styles.userBox}>
          <img id="profilePic" src='/icon.png' alt="Profile Picture" />
          <div>
            <p id='usernameDisplay'>Username</p>
            <p id='emailDisplay'>Email</p>
          </div>
        </a>
        <div>

        <ReactPlayer videoId="_flKbsZoAHg"></ReactPlayer>
        <p id="nextSong">ctkpsRAxUSE</p>
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
        iframe {

        }

        .component {
          background-color: white;
          width: 100%;
          max-width: 600px;
          margin: 1em auto;
          padding-bottom: 2em;
          border: 3px solid black;
          border-radius: 10px;
          text-align: center;
        }

        .musicCover {
          border-radius: 10%;
        }
        
        .musicPlayerButtons {
          border:
          align-items: center;
          justify-content: center;
        }
        
        .songTitle {
          margin-top: -1em;
          color: #4f4f4f;
        }
        
        .time {
          margin: 0 auto;
          width: 80%;
          display: flex;
          justify-content: space-between;
          color: #828282;
          font-size: smaller;
        }
        
        .timeline {
          width: 80%;
          background-color: #27ae60;
        }

        input[type="range"] {
          background-color: #27ae60;
        }

        .flex-container {
          background-color: rgb(80, 80, 80);
          color: rgb(70, 200, 60);
          padding: 0 0.5rem;
          display: flex;
        }

        .flex-container > div {
          background-color: #f1f1f1;
          border-radius: 15px;
          margin: 10px;
          padding: 20px;
          font-size: 12px;
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