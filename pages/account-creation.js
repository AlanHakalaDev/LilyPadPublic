import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function AccountCreation() {
    const handleSubmit = async (event) => {
      event.preventDefault()
      const name = document.querySelector('#username').value
      const email = document.querySelector('#email').value
      const password = document.querySelector('#pass').value
  
      if (!name) {
        alert('Please enter a name.')
        return false
      }
  
      if (!email) {
        alert('Please enter an email.')
        return false
      }

      if (!password) {
        alert('Please enter a password.')
      }
      const data = {
        email: event.target.email.value,
        username: event.target.username.value,
        pass: event.target.pass.value,
        description: "Hi, I'm a newcomer to LilyPad!",
        imageFilePath: "public/icon.png",
      }
      const JSONdata = JSON.stringify(data)
      const endpoint = '/api/user'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      }

      await fetch(endpoint, options)
      .then((response) => {
      return response.text()
      }).then((data) => {
        sessionStorage.setItem('userId',`${data}`);
        //TODO: Redirect to profile page, get session details for login to remain between pages.
        //alert(sessionStorage.getItem('userId'));
      });

      /**await fetch(endpoint, options).then((res) => {return res.json()}).then((content) => {
        console.log("content: ", content)
        console.log("body: ", content.body)
      })
      const result = await response.json().then((res) => {

        alert(`Account created with username and email: ${res.body}`)})*/
      //response.then((result) => {console.log(result.json().body)})
      
      //const result = await response.json().then()
      //alert(`Account created with username and email: ${result.data}`)
      
      //
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>LilyPad</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/CS386Team6/CS386_Team_6_Project">LilyPad!</a>
        </h1>

        <p className={styles.description}>
          Create an account below:
        </p>

        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label><br/>
        <input type="text" id="username" name="username" autoComplete='off' required /><br/>
        <label htmlFor="username">Email</label><br/>
        <input type="text" id="email" name="email" autoComplete='off' required /><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="pass" name="pass" autoComplete='off' required pattern="[A-Za-z0-9]{1,15}"/><br/>
  
        <button type="submit">Create Account</button>
      </form>
        
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
