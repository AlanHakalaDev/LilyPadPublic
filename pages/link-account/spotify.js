import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { setProfile } from '/functions/profile-display.js'
import React, { useState, useEffect } from 'react';

var makePlayer = function() {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        window.onSpotifyWebPlaybackSDKReady = () => {
    
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
            });

    
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });
    
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            
            player.addListener('initialization_error', ({ message }) => {
              console.error(message)
            })
            
            player.addListener('authentication_error', ({ message }) => {
              console.error(message)
            })

            player.addListener('account_error', ({ message }) => {
              console.error(message)
            })
    
            const myActivateElementButton = document.getElementById("Autoplayer")
            myActivateElementButton.addEventListener('click', () => {
              // The player is activated. The player will keep the
              // playing state once the state is transferred from other
              // applications.
              player.connect()
              //player.activateElement();
            });


        };
      }

var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

  var scope = "streaming \
               user-read-email \
               user-read-private"

  var state = generateRandomString(16);

  var auth_query_parameters = new URLSearchParams({
  response_type: "code",
  client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  scope: scope,
  redirect_uri: "http://localhost:3000/music-player",
  state: state
})
const redirectURI = 'https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString();


export default function MusicPlayer() {

  useEffect(() => {
  setProfile()

  const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const authCode = urlParams.get('code')
    let token = ''
    if (authCode === null) {
      window.location = redirectURI
    }
    else 
    {
      // FETCH POST HTTPS requst to api/token spotify endpoint.
      //token = fetch('https://accounts.spotify.com/api/token')

      var fetchData = {
        method: 'POST',
        body: {
          grant_type: "authorization_code",
          code: authCode,
          redirect_uri: process.env.NEXT_PUBLIC_HOST + '/music-player',
          client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
        },
        headers: {
          'Authorization': 'Basic ' + (new Buffer.from(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET).toString('base64')),
          'Content-Type' : 'application/x-www-form-urlencoded',
        },
        json: true
      };
      
        let fetchData = {
    body: `grant_type=authorization_code&code=${authCode}&redirect_uri=${process.env.NEXT_PUBLIC_HOST + '/music-player'}`,
    headers: {
        Authorization: 'Basic ' + (new Buffer.from(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET).toString('base64')),
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
}
      fetch('https://accounts.spotify.com/api/token', fetchData).then((response) => {
        console.log("success:", response)
        response.json().then((body) => {console.log(body)
          console.log(body.access_token)
        token = body.access_token})
      })
      .catch((response) => {
        console.log("error:", response)
      })

    }
  }, [])

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
        <h1>Spotify Web Playback SDK Quick Start</h1>
        
        <button id="Autoplayer" onClick={() => { makePlayer() }}>Activate Player</button>
        <button id="Start Player" onClick={() => { player.togglePlay();}}>Toggle Play</button>
        </main>

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
          border-top: 1px solid rgb(50, 50, 50);
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