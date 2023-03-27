import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Login() {
    const handleSubmit = async (event) => {
      event.preventDefault()
      const email = document.querySelector('#email').value
      const password = document.querySelector('#pass').value
  
      if (!email) {
        alert('Please enter an email.')
        return false
      }

      if (!password) {
        alert('Please enter a password.')
      }
      const data = {
        email: event.target.email.value.toLowerCase(),
        password: event.target.pass.value,
      }
      const JSONdata = JSON.stringify(data)
      const endpoint = '/api/auth'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      }

      await fetch(endpoint, options)
      .then((response) => {
        if (response.status === 200) {
          return response.text()
        }
        else throw response.status
      }).then((data) => {
        sessionStorage.setItem('userId',`${data}`);
        window.location.href = `${process.env.NEXT_PUBLIC_HOST}` + "/profile";
      }).catch((response) => {
        if ( response === 401 ) {
          alert("The password or email is incorrect.")
        }
        else {
          alert("Something went wrong on the server.")
        }

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
          Login below:
        </p>

        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label><br/>
        <input type="email" id="email" name="email" autoComplete='off' required /><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="pass" name="pass" autoComplete='off' required pattern="[A-Za-z0-9]{1,30}"/><br/>
  
        <button id="submit" type="submit">Log In</button>
        <input id="reset" type="reset" value="Reset Fields"/>
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