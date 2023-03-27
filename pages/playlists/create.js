import Head from 'next/head';
import styles from '/styles/Home.module.css';
import {useEffect } from 'react'
import { setProfile } from '/functions/profile-display.js'

export default function Playlists() {
  useEffect(() => {
    setProfile()
    }, [])
  const handleSubmit = async (event) => {
    event.preventDefault()
    const playlistTitle = document.querySelector('#playlistTitle').value
    const desc = document.querySelector('#desc').value
    const loggedInUserId = sessionStorage.getItem("userId")

    if (!playlistTitle) {
      alert('Please enter a playlist title.')
      return
    }

    if (!loggedInUserId) {
      alert ('You need to create an account to create playlists.')
      return
    }
    const data = {
      name: event.target.playlistTitle.value,
      description: event.target.desc.value,
      userId: JSON.parse(loggedInUserId),
    }
    const JSONdata = JSON.stringify(data)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    await fetch(`${process.env.NEXT_PUBLIC_HOST}`+'/api/playlists', options)
    .then((response) => {
      if (response.status === 200) {
        return response.text()
      }
      else {
        throw response.text()
      }
    }).catch((data) => {
        alert(data.data)
    }).then((newPlaylistInfo) => {
      console.log(newPlaylistInfo)

    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
      <a id="userBox" href="profile" className={styles.userBox}>
        <img id="profilePic" src='/icon.png' alt="Profile Picture"/>
        <div>
        <p id='usernameDisplay'>Username</p>
        <p id='emailDisplay'>Email</p>
        </div>
        </a>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/CS386Team6/CS386_Team_6_Project">LilyPad!</a>
        </h1>

        <p className={styles.description}>
          Playlists:
        </p>


        <form onSubmit={handleSubmit}>
        <label htmlFor="playlistTitle">Playlist Title: </label><br/>
        <input type="text" id="playlistTitle" name="playList" autoComplete='off' required /><br/>
        <label htmlFor="desc">description</label><br/>
        <input type="text" id="desc" name="desc" autoComplete='off' required /><br/>
  
        <button id="submit" type="submit">Create Playlist</button>
        <input id="reset" type="reset" value="Reset Fields"/>
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
  )}