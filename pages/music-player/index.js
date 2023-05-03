import Head from 'next/head';
import styles from '/styles/Home.module.css';
import { useEffect } from 'react'
import { setProfile } from '/functions/profile-display.js'
import NavBar from '/functions/navBar-display.js';
import ReactPlayer from '../../components/player';

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

var firstId = "1VXMLuZkq1g"

export default function Playlists() {


  useEffect(() => {
    setProfile()


    const loggedInUserId = JSON.parse(sessionStorage.getItem("userId"))

    if (!loggedInUserId) {
      alert('You need to create an account to listen to songs.')
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
        //const songsGroup = document.createDocumentFragment()

        songList.forEach(function (song) {



            fetch(`${process.env.NEXT_PUBLIC_HOST}` + `/api/songs/${song.id}`, options)
            .then((response) => {
            if (response.status === 200) {
              return response.json()
            }
            else {
              throw response.text()
            }
          }).catch((data) => {
            console.log("rip")
          }).then((YTSong) => {
            let container = document.createElement('div')
            container.className = "nextSongs"
            container.style.border = "1px solid rgb(80, 80, 80)"
            container.style.borderRadius = "15px"
            container.style.padding = "5px"
            container.style.margin = "5px"
            container.style.fontSize = "12px"

            let title = document.createElement('p')
            container.style.padding = "0px 12px"

            //let id = document.createElement('p')
            let creator = document.createElement('p')
            container.style.padding = "0px 12px"
            let icon = document.createElement('img')
            icon.height = "0%"
            container.id = YTSong.youtubeId
            creator.innerHTML = YTSong.artists[0].name
            title.innerHTML = YTSong.title
            icon.src = YTSong.thumbnailUrl

            //
            /*
            }
            flex: 1;
            display: flex;
            flex-direction: column;

            container.style.flex = ''
            container.style.flexDirection = 'row'*/
            container.appendChild(title)
            //container.appendChild(id)
            container.appendChild(creator)
            container.appendChild(icon)

            htmlContainer.appendChild(container)
            //console.log(songsGroup)
            //musicPlayer.src = `https://www.youtube-nocookie.com/embed/${song.youtubeId}`
          })
            
      })
        //htmlContainer.appendChild(songsGroup)
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
        <NavBar/>
        <a id="userBox" hidden href="/profile" className={styles.userBox}>
          <img id="profilePic" src='/icon.png' alt="Profile Picture" />
          <div>
            <p id='usernameDisplay'>Username</p>
            <p id='emailDisplay'>Email</p>
          </div>
        </a>

        <div className = "flex-container">
          <div id="music-container">
            <ReactPlayer videoId={firstId}></ReactPlayer>
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