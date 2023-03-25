import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react';
// TODO: Add a "new search" button to get back to search options page
// TODO: Add functionality for additional details to be rendered.

export default function TrackSearch() {
  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem('userId'))
    const endpoint = `/api/user/${userId}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  
    fetch(endpoint, options)
    .then((response) => {
    return response.json()
    }).then((data) => {
      document.getElementById("usernameDisplay").innerHTML = `${data.username}`
      document.getElementById("emailDisplay").innerHTML = `${data.email}`
      document.getElementById("profilePic").src = `${data.picture}`
      document.getElementById("userBox").hidden = false
    });
  
    }, [])
  useEffect(() => {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams != {}) {
      // TODO: Add functionality for platform selections to actually work
      
      const requestBody = { 
        "track": urlParams.get('title'),
        "artist": urlParams.get('creator'),
        "type": "track",
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
        let searchTitle = document.getElementById("searchTitle")
        searchTitle.innerHTML = "Search results for '" + `${urlParams.get('title')}` + "' by '" + `${urlParams.get('creator')}` + "':"
        const htmlContainer = document.getElementById("tracklist")
        const trackList = document.createDocumentFragment()
        body.tracks.map(function(result) {
          // TODO: Apply universal style to div element and parent element for cleaner results
          let container = document.createElement('div')
          let saveButton = document.createElement('button')
          let title = document.createElement('p')
          let artist = document.createElement('p')
          let platform = document.createElement('p')
          let coverArt = document.createElement('img')
          let icon = document.createElement('img')

          saveButton.innerHTML = "Save"
          title.innerHTML = `${result.data.name}`
          artist.innerHTML = `${result.data.artistNames}`
          platform.innerHTML = `${result.source}`
          coverArt.src = `${result.data.imageUrl}`
          coverArt.height = 200
          coverArt.width = 200
          // TODO: render separate icons based on platform
          icon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
          icon.height = 200
          icon.width = 200

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

        <p id="searchTitle" className={styles.description}>
        </p>

        <div id="tracklist"></div>
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