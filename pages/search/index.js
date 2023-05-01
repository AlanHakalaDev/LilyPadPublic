import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react';
import { setProfile } from '/functions/profile-display.js';
import NavBar from '../functions/navBar-display.js';



export default function Search() {

  useEffect(() => {
    setProfile()
    }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <NavBar/>

      <div className="tab-container">
        <button className="toggle-button" onClick={toggleVisibility}>
          {isVisible ? '| | |' : '| | |'}
        </button>
        <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
          <ul className="list">
            <li><a href ="../">Home</a></li>
            <li><a href ="playlists">Playlists</a></li>
            <li><a href ="account-creation">creat an account</a></li>
            <li><a href ="profile">profile</a></li>
            <li><a href ="login">login</a></li>
            <li><a href ="search">search</a></li>
            <img className='icon' src="/icon.png" alt='icon'/>
          </ul>
        </nav>
     </div>

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

        <p className={styles.description}>
          Search Playlists or Songs:
        </p>
        <form action='/index' id="searchForm" name="searchForm">
          <label htmlFor="title">Name of Playlist or Song:</label><br/>
          <input type="text" autoComplete="off" id="title" name="title" placeholder="Title..." /><br/>
          <label htmlFor="artist">Name of Creator or Artist:</label><br/>
          <input type="text" autoComplete="off" id="creator" name="creator" placeholder="Maker..." />
          <p>Type of Search:</p>
          <input type="radio" id="playlist" name="type" value="playlist" onClick={() => {var form = document.getElementById('searchForm'); form.action = 'search/playlist'}}/>
          <label htmlFor="playlist">Playlist</label><br/>
          <input type="radio" id="track" name="type" value="track" onClick={() => {var form = document.getElementById('searchForm'); form.action = 'search/track'}}/>
          <label htmlFor="track">Track</label>
          <p>Platorms to Search:</p>
          <input type="checkbox" id="Spotify" name="Spotify" value="true"/>
          <label htmlFor="Spotify"> Spotify</label><br/>
          <input type="checkbox" id="YoutubeMusic" name="YoutubeMusic" value="true"/>
          <label htmlFor="YoutubeMusic"> Youtube Music</label><br/>
          <input type="checkbox" id="AppleMusic" name="AppleMusic" value="true"/>
          <label htmlFor="AppleMusic"> Apple Music</label><br/><br/>
          <input type="submit" id="submit" className={styles.searchButton}/>
        </form>
      </main>

      <footer>
          Powered by caffeine and late-night motivation
      </footer>

      <style jsx>{`

      .tab-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
      }

      .toggle-button {
        position: fixed;
        top: 10px;
        left: 0;
        margin: 10px;
        cursor: pointer;
        z-index: 1;
        
        
        
      }

      .toggle-button:hover {
        background-color: #3e8e41;
      }



      button {
        background-color: #4CAF50;
        color: #fff;
        padding: 10px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        margin-top: 20px;
        
      }

      .navbar{
        top: -100px;
        left: 0;
        width: 100%;
        color: white;
        background-color: black;
        position: fixed;
        padding: 10px;
        transition: top .5s ease-in-out;
        
      }

      .navbar.visible{
        top: 0;
      }

      li{
        float: left;
        padding-right: 50px;
      }

      li a:hover{
        color: #4CAF50;
        text-decoration: underline;
      }

      li a {
        
        width: 100%;
        display: block;
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        
      }

      .list {
        color: black;
        padding-bottom: 20px;
        padding-left: 90px;

      }

      .list li:hover {
        animation: anim2 1s cubic-bezier(0.175, 0.885, 0.32, 0.275) 1;
        list-style: none;  
        
      }
      
      @keyframes anim2 {
        0% {
          opacity: 1;
          transform: translateY(0px);
          
        }
        25% {
          opacity: 0;
          transform: translateY(-10px);
        }
        50% {
          opacity: 1;
          transform: translateY(0px);
        }
        75% {
          opacity: 0;
          transform: translateY(10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }

      .icon{
        width: 30px;
        height: 30px;
        float: right;

      }


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

        form {
          margin: auto;
          width: 50%;
          padding: 20px;	
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
        }
    
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
    
        label {
          display: block;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="password"] {
          padding: 10px;
          border-radius: 5px;
          border: none;
          box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
          margin-bottom: 20px;
          width: 100%;
        }
    
        input[type="submit"],
        input[type="reset"] {
          background-color: #4CAF50;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          margin-top: 20px;
        }
    
        input[type="submit"]:hover {
          background-color: #3e8e41;
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
