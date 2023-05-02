import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../functions/navBar-display.js';

export default function Home() {


  return (
    <div className={styles.container}>

      <NavBar/>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/CS386Team6/CS386_Team_6_Project">LilyPad!</a>
        </h1>

        <p className={styles.description}>
          All the best music platforms and sources in one place
        </p>

        <div className="section">
            <div className='seperator'>
            </div>
              
            <br></br>
            <br></br>

            <h2>Our Purpose</h2>
            <p className={styles.description}>
              Welcome to Lily Pad, the ultimate music platform designed to provide you with a superior
              listening experience. Our goal is to bring together the best of all music platforms,
              including Spotify, Apple, and YouTube Music, in one place. With Lily Pad, you can easily
              create personalized playlists, discover new music, and enjoy all of your favorite tunes.

              <br></br>
              <br></br>

              At Lily Pad, we understand that music is a personal and social experience. That's why
              we've made it easy for you to share your favorite playlists with your friends and even
              edit their playlists to make them your own. With our platform, you can connect with other
              music lovers, discover new artists, and create the ultimate music library that reflects your unique style.

              <br></br>
              <br></br>

              Whether you're in the mood for some old classics or the latest chart-topping hits, Lily Pad
              has got you covered. With our intuitive user interface and extensive library of music, you'll
              never run out of options. So why wait? Join Lily Pad today and take your music experience to the next level!
            </p>
          </div>

          <div className="section">
            
            <div className='seperator'>
            </div>

          
            <br></br>
            <br></br>

            <h2>About Us</h2>
            <p className={styles.description}>
              We are a group of passionate computer science engineers attending Northern Arizona University,
              working together to bring a revolutionary change to the music industry. As a part of our database
              class project, we have come together to develop Lily Pad, the ultimate music platform that combines
              the best features from various music streaming services.

              <br></br>
              <br></br>

              Our team comprises of talented individuals who are dedicated to using technology to create innovative
              solutions. We are driven by our love for music and our desire to make it accessible to everyone. Our
              collective skills and experience have allowed us to develop a platform that is user-friendly, intuitive,
              and adaptable. With Lily Pad, we aim to create a seamless listening experience for all music enthusiasts,
              while constantly pushing the boundaries of what is possible. We are excited to share our vision with the
              world and bring a new era of music streaming to life.
            </p>

          </div>

          <div className="section">
           
            <div className='seperator'>
            </div>
              
            <br></br>
            <br></br>

            <h2>Donations</h2>
            <p className={styles.description}>
              At Lily Pad, we are committed to using our platform to make a positive impact on the world.
              That's why we have partnered with the Finless Dolphin Organization to donate all proceeds
              from our service towards helping dolphins born without fins.

              <br></br>
              <br></br>

              The Finless Dolphin Organization is a non-profit organization dedicated to providing a
              better life for these amazing creatures. With the help of Lily Pad's donations, the
              organization is able to construct prosthetics and provide essential care and support for
              these dolphins. By choosing to use Lily Pad, not only are you enjoying a superior music experience,
              but you are also contributing towards a worthy cause. Join us in our mission to make a difference
              in the world, one finless dolphin at a time.
            </p>
          </div>

      </main>

      <footer>
          Powered by caffeine and late-night motivation
      </footer>

      <style jsx>{`

        p{
          
          width: 80%;
          margin: 30px auto;

        }

        .seperator{
          background-image: url('/icon.png');
          background-repeat: repeat-x;
          background-position: right top;
          background-size: 30px 30px;
          height: 50px;
        }

        
        
        .section {
          margin: 50px auto;
          width: 80%;
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
