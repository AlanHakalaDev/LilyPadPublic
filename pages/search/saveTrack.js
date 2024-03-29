import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react';
import { setProfile } from '/functions/profile-display.js'
import NavBar from '/functions/navBar-display.js';
// TODO (DONE): Add a "new search" button to get back to search options page
// TODO: Add functionality for additional details to be rendered.
// TODO: Implement the user playlist database into the javascript and html
    // For now, the select playlist is just a skeleton and an example of 
    // what the functionality would look like

export default function saveTrack() {

  useEffect(() => {
    setProfile()
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const songTitle = urlParams.get('song-title');
    const sourcePlatform = urlParams.get('source-platform').toUpperCase();
    const songArtist = urlParams.get('song-artist');
    const url = urlParams.get('cover-art');
    const platformId = urlParams.get('song-id')



    const img = new Image();
    img.src = url;
    img.height = 200;
    img.id = "cover-art";

    document.getElementById('song-title').textContent = "The song you chose to save was '" + songTitle + "' by " + songArtist;
    document.getElementById('source-platform').textContent = "From platform: " + sourcePlatform;
    document.getElementById('cover-art').appendChild(img);

    const loggedInUserId = JSON.parse(sessionStorage.getItem("userId"))

    let options = {
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
            if (playlist.creatorId === loggedInUserId) {

                let container = document.createElement('div')
                container.style.border = '1px solid gray'
                container.style.borderRadius = '15px'
                container.style.margin = '20px'        
                let selection = document.createElement('input')
                selection.type = "checkbox"
                selection.name = "playlist"
                selection.value = `${playlist.id}`
                selection.id = `${playlist.playlistTitle}`
                //selection.name = `${playlist.playlistTitle}`
                let label = document.createElement('label')
                label.innerHTML = `${playlist.playlistTitle}`
                label.htmlFor = selection.id
                let description = document.createElement('p')
                description.innerHTML = `${playlist.description}`
                container.appendChild(label)
                container.appendChild(selection)
                container.appendChild(description)
                playlistsGroup.appendChild(container)
            }
        })
        htmlContainer.appendChild(playlistsGroup)

      });

    const btn = document.querySelector('#saveSongToSelectedPlaylist');
    btn.addEventListener('click', (event) => {
      let checkboxes = document.querySelectorAll('input[name="playlist"]:checked');
      let values = [];
      checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
      })
    
      const requestBody = {
        song: {
          platformId: platformId,
          title: songTitle,
          artist: songArtist,
          platform: sourcePlatform
        },
        playlist: {
          ids: values,
        }
      }

      options = {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody)
      }

      //const JSONBody = JSON.stringify(options)
      fetch(`${process.env.NEXT_PUBLIC_HOST}`+'/api/songs', options)
      .then((response) => {
          if (response.status === 200) {
            return response.json()
          }
          else {
            throw response.text()
          }
        }).catch((data) => {
            alert(data)
        }).then(() => {alert("Saved the song to: " + values);
        window.location = `${process.env.NEXT_PUBLIC_HOST}/search` })
      })
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
          <img id="profilePic" src='/icon.png' alt="Profile Picture"/>
          <div>
            <p id='usernameDisplay'>Username</p>
            <p id='emailDisplay'>Email</p>
          </div>
        </a>

        <p id="song-title"></p>
        <p id="source-platform"></p>
        <div id="cover-art"></div>

        <p>
          Which playlist would you like to save the song to?
        </p>
        <div id="playlists">
        </div>
        <p className={styles.button}>
          <button id="saveSongToSelectedPlaylist">Save Song</button>
        </p>
        <a
          id="returnToSearch"
          href="/search"
          className={styles.searchButton}
        >
          <p>Search Another Song</p>
        </a>

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