import Head from 'next/head';
import styles from '/styles/Home.module.css';
import { useEffect } from 'react'
import { setProfile } from '/functions/profile-display.js'

import { useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

//const [isPlaying, setIsPlaying] = useState(false);
//const [play, {pause, duration, sound}] = useSound();



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
        const musicPlayer = document.getElementById("music-player")

        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
    
        fetch(`${process.env.NEXT_PUBLIC_HOST}` + `/api/songs/${document.getElementById("songs").firstChild.id}`, options)
          .then((response) => {
            if (response.status === 200) {
              return response.json()
            }
            else {
              throw response.text()
            }
          }).catch((data) => {
            alert(data.data)
          }).then((song) => {
            musicPlayer.src = `https://www.youtube-nocookie.com/embed/${song.youtubeId}`
          })

        
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

        <div className="component">
            <h2>Playing Now</h2>
            <div>
              <h3 className="songTitle">Song Name</h3>
              <p className="songArtist">Song Artist</p>
            </div>
            <div>
              <div className="time">
              <p>
                {0}:{0}
              </p>
              <p>
                {4}:{20}
              </p>
              </div>
              <input
                type="range"
                min="0"
                default="0"
                className="timeline"
                onChange={(e) => {
                  sound.seek([e.target.value]);
                }}
              />
            </div>
            <div>
              <button className="musicPlayerButtons" id="prevButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <BiSkipPrevious />
                </IconContext.Provider>
              </button>
              <button className="musicPlayerButtons" id="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </button>
              <button className="musicPlayerButtons" id="pauseButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <AiFillPauseCircle />
                </IconContext.Provider>
              </button>
              <button className="musicPlayerButtons" id="nextButton">
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipNext />
              </IconContext.Provider>
              </button>
            </div>
         </div>

        <div className = "flex-container">
          <div>
            <div height="100px">
            <iframe id="music-player" width="0" height="0" src="https://www.youtube-nocookie.com/embed/NbtsZJXnzFY" title="YouTube video player"frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

            </iframe>
            </div>
          </div>
          <div>
            <p className={styles.description}>
              Available Songs:
            </p>

            <div id="songs"></div>
          </div>
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
          width: 90%;
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