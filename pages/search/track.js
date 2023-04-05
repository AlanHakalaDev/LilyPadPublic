import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react';
import { setProfile } from '/functions/profile-display.js'
// TODO: Add a "new search" button to get back to search options page
// TODO: Add functionality for additional details to be rendered.


export default function TrackSearch() {
  
  useEffect(() => {
    setProfile()
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams != {}) {
      let sources = [];
      if (urlParams.get("Spotify") === "true") {
        sources.push("spotify")
      }
      if (urlParams.get("YoutubeMusic") === "true") {
        sources.push("youtube-music")
      }
      if (urlParams.get("AppleMusic") === "true") {
        sources.push("apple-music")
      }
      const requestBody = { 
        "track": urlParams.get('title'),
        "artist": urlParams.get('creator'),
        "type": "track",
        "sources": sources
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
        let searchTitle = document.getElementById("searchTitle")
        searchTitle.innerHTML = "Search results for '" + `${urlParams.get('title')}` + "' by '" + `${urlParams.get('creator')}` + "':"
        const htmlContainer = document.getElementById("tracklist")
        const trackList = document.createDocumentFragment()
        body.tracks.map(function(result) {

          // TODO: Apply universal style to div element and parent element for cleaner results
          let container = document.createElement('div')
          let title = document.createElement('h2')
          if (result.status === "error") {
            title.innerHTML = `Search failed for ${result.source}`
            container.appendChild(title)
            trackList.appendChild(container)
            return false
          }
          let artist = document.createElement('h3')
          let platform = document.createElement('p')
          let coverArt = document.createElement('img')
          let saveButton = document.createElement('button')
          let icon = document.createElement('img')

          saveButton.innerHTML = "Save"
          saveButton.addEventListener("click", function(e) {
            console.log("You saved song: " + `${result.data.name}` + " from: " + `${result.source}`);
            localStorage.setItem('song-title', `${result.data.name}`);
            localStorage.setItem('song-artist', `${result.data.artistNames}`);
            localStorage.setItem('source-platform', `${result.source}`);
            localStorage.setItem('cover-art', `${result.data.imageUrl}`);
            localStorage.setItem('song-id', `${result.data.externalId}`)
            window.location.href = "saveTrack";
          })

          title.innerHTML = `${result.data.name}`
          artist.innerHTML = `${result.data.artistNames}`

          coverArt.src = `${result.data.imageUrl}`
          // TODO: render separate icons based on platform
          icon.width = 100
          icon.height = 100
          
          switch ( result.source ) {
            case "apple-music": {
              icon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png"
              coverArt.height = 100
              coverArt.width = 100
              platform.innerHTML = "Apple Music"
              break
            }
            case "youtube-music": {
              icon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/768px-Youtube_Music_icon.svg.png"
              coverArt.height = 100
              coverArt.width = 100
              platform.innerHTML = "YouTube Music"
              break
            }
            case "spotify": {
              icon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
              coverArt.height = 100
              coverArt.width = 100
              platform.innerHTML = "Spotify"
              break
            }
            case "youtube": {
              icon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
              icon.height = 110
              icon.width = 160
              coverArt.height = 80
              coverArt.width = 190
              platform.innerHTML = "YouTube"
              break
            }
            default: {
              icon.src = "public/icon.png"
              coverArt.height = 100
              coverArt.width = 100
              platform.innerHTML = "undefined"
            }

          }

          container.appendChild(saveButton)
          container.appendChild(title)
          container.appendChild(artist)
          container.appendChild(platform)
          container.appendChild(coverArt)
          container.appendChild(icon)
          trackList.appendChild(container)


        })
        htmlContainer.appendChild(trackList)
      }
      else {
        throw body
        // TODO: Render error message if request falls through
      }
    })
    })
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
      <a id="userBox" hidden href="/profile" className={styles.userBox}>
        <img id="profilePic" src='/icon.png' alt="Profile Picture"/>
        <div>
        <p id='usernameDisplay'>Username</p>
        <p id='emailDisplay'>Email</p>
        </div>
        </a>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/CS386Team6/CS386_Team_6_Project">LilyPad!</a>
        </h1>

        <p id="searchTitle" className={styles.description}>
        </p>

        <div className={styles.trackContainer}>
          <div id="tracklist"></div>
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
        .trackContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
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