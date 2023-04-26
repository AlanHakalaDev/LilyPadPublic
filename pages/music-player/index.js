import Head from 'next/head';
import styles from '/styles/Home.module.css';
import { useEffect } from 'react'
import { setProfile } from '/functions/profile-display.js'
import { searchMusics } from 'node-youtube-music';


const musics = await searchMusics('Never gonna give you up');

console.log(musics)


export default function Playlists() {
  useEffect(() => {
    setProfile()


    const loggedInUserId = JSON.parse(sessionStorage.getItem("userId"))

    if (!loggedInUserId) {
      alert('You need to create an account to listen to songs.')
    }
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    fetch(`${process.env.NEXT_PUBLIC_HOST}` + '/api/songs', options)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        else {
          throw response.text()
        }
      }).catch((data) => {
        alert(data.data)
      }).then((songList) => {
        const htmlContainer = document.getElementById("songs")
        const playlistsGroup = document.createDocumentFragment()
        songList.forEach(function (song) {
            let container = document.createElement('div')
            let title = document.createElement('p')
            let id = document.createElement('p')
            let creator = document.createElement('p')
            let platform = document.createElement('p')
            container.id = `${song.id}`
            /**model Song {
  id        String        @id
  songTitle String
  songCreator String
  platform  Platform
  playlists Playlist[]
} */
            
            container.style.border = '1px solid gray'
            container.style.borderRadius = '15px'
            id.innerHTML = song.id
            title.innerHTML = song.songTitle
            platform.innerHTML = song.platform
            creator.innerHTML = song.songCreator

            container.appendChild(title)
            container.appendChild(creator)
            container.appendChild(platform)
            container.appendChild(id)
            playlistsGroup.appendChild(container)
      })
        htmlContainer.appendChild(playlistsGroup)
        //https://www.npmjs.com/package/youtube-music-api

      });
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

        <p className={styles.description}>
          Available Songs:
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