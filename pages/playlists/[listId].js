import Head from 'next/head';
import styles from '/styles/Home.module.css';
import { useEffect } from 'react'
import { setProfile } from '/functions/profile-display.js'
import { useRouter } from 'next/router'

export default function Playlists() {
    useEffect(() => {
        setProfile()
    }, [])
    const router = useRouter()
    const { listId } = router.query
    const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    }
    fetch(`${process.env.NEXT_PUBLIC_HOST}` + '/api/playlists/' + listId, options)
    .then((response) => {
        if (response.status === 200) {
        return response.json()
        }
        else {
        throw response.text()
        }
    }).catch((data) =>{
    }).then((playlistDesired) => {
      if(playlistDesired != null){
      const htmlContainer = document.getElementById("songs")
      const songsGroup = document.createDocumentFragment()
      playlistDesired.songs.forEach(function(song){
        let container = document.createElement('div')
        let title = document.createElement('p')
        let platform = document.createElement('p')
        let creator = document.createElement('p')
        container.id = `${song.id}`
        container.style.border = '1px solid gray'
        container.style.borderRadius = '15px'
        title.innerHTML = `${song.songTitle}`
        platform.innerHTML = `${song.platform}`
        creator.innerHTML = `${song.songCreator}`

        container.appendChild(title)
        container.appendChild(platform)
        container.appendChild(creator)
        songsGroup.appendChild(container)
      })
      htmlContainer.appendChild(songsGroup)
    }
    });

return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
        <a id="userBox" href="/profile" className={styles.userBox}>
          <img id="profilePic" src='/icon.png' alt="Profile Picture" />
          <div>
            <p id='usernameDisplay'>Username</p>
            <p id='emailDisplay'>Email</p>
          </div>
        </a>
        

        <p className={styles.description}>
          Songs:
        </p>

        <div id="songs"></div>


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