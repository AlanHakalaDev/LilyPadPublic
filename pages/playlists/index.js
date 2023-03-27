import Head from 'next/head';
import styles from '/styles/Home.module.css';
import {useEffect } from 'react'
import { setProfile } from '/functions/profile-display.js'

export default function Playlists() {
    useEffect(() => {
    setProfile()

    const loggedInUserId = JSON.parse(sessionStorage.getItem("userId"))

    if (!loggedInUserId) {
        alert ('You need to create an account to create playlists.')
    }
    const options = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    }

    fetch(`${process.env.NEXT_PUBLIC_HOST}`+'/api/playlists', options)
    .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        else {
          throw response.text()
        }
      }).catch((data) => {
          alert(data.data)
      }).then((playlistList) => {
        const htmlContainer = document.getElementById("playlists")
        const playlistsGroup = document.createDocumentFragment()
        playlistList.forEach(function(playlist) {
            if ((playlist.isPublic) || (playlist.creatorId === loggedInUserId)) {
                let container = document.createElement('div')
                let title = document.createElement('p')
                let creator = document.createElement('p')
                let description = document.createElement('p')
                let ispublic = document.createElement('p')
                
                container.id = `${playlist.id}`
                container.style.border = '1px solid gray'
                container.style.borderRadius = '15px'
                title.innerHTML = `${playlist.playlistTitle}`
                creator.innerHTML = `${playlist.creatorId}`
                description.innerHTML = `${playlist.description}`
                if (playlist.isPublic) {
                    ispublic.innerHTML = '(Visible to everyone on LilyPad)'
                }
                else {
                    ispublic.innerHTML = '(Visible only to you)'
                }

                container.appendChild(title)
                container.appendChild(creator)
                container.appendChild(description)
                container.appendChild(ispublic)
                playlistsGroup.appendChild(container)
            }
        })
        htmlContainer.appendChild(playlistsGroup)

      });
    }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
      <a id="userBox" hidden href="profileEdit" className={styles.userBox}>
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
          Your Playlists:
        </p>

        <div id="playlists"></div>

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