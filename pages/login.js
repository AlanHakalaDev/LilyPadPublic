import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import NavBar from '/functions/navBar-display.js';
//const endpoint = `localhost:3000/api/user`

export default function AccountCreation() {

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
        pass: event.target.pass.value,
      }
      const JSONdata = JSON.stringify(data)
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      }

      fetch(`${process.env.NEXT_PUBLIC_HOST}`+'/api/auth', options)
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
        <NavBar/>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/CS386Team6/CS386_Team_6_Project">LilyPad!</a>
        </h1>

        
        <form onSubmit={handleSubmit}>
        <p className={styles.description}>
          Log In Below:
        </p>
        <label htmlFor="email">Email</label><br/>
        <input type="email" id="email" name="email" autoComplete='off' required /><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="pass" name="pass" autoComplete='off' required pattern="[A-Za-z0-9]{1,30}"/><br/>
  
        <input id="submit" type="submit" value="Log In"/><br/>

        <input id="reset" type="reset" value="Reset Fields"/>
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
    
        .error {
          color: red;
          margin-top: 5px;
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
