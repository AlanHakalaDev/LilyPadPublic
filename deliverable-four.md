# CS386 Team 6 Deliverable 4

### Team Members:
Alan Hakala, Gannon Rowlan, Isaac Faulkner, Nathan Seitz, Rino De Guzman, Vamshi Vavilla

## 1: Introduction
LilyPad is a website that provides listeners with a single place to link together their favorite songs, playlists, platforms, and artists. The site provides users a way to search for songs, put them into their own playlists, and listen to them. The unique factor of LilyPad comes from the fact that it connects all the popular platforms together, meaning songs exclusive to Spotify can appear in playlists right alongside songs from Youtube and Apple Music.

## 2: Implemented Requirements

### 2.1: Profile Creation
Requirement: As a Listener, I want to be able to create an account so that I can make full use of LilyPad.

Issue: [Profile Creation](https://github.com/CS386Team6/LilyPad/issues/21)

Pull request: [PR 40](https://github.com/CS386Team6/LilyPad/pull/40)

Implemented by: Nathan Seitz

Approved by: Rino De Guzman

### 2.2: Search Bar Feature

Requirement: As a Listener, I want a search feature so that I can find new songs.

Issue: [Search Bar](https://github.com/CS386Team6/LilyPad/issues/17)

Pull request: [PR 39](https://github.com/CS386Team6/LilyPad/pull/39)

Implemented by: Nathan Seitz

Approved by: Rino De Guzman

### 2.X: REQUIREMENT_NAME (Duplicate as necessary)

Requirement: As a Listener, I want ... so that I can ....

Issue: [Issue](LINK_TO_ISSUE)

Pull request: [Pull Request](LINK_TO_PULL_REQUEST)

Implemented by: DEVELOPER_NAME

Approved by: APPROVER_NAME


## 3: Tests

### 3.1: Test Framework
We chose to use Cypress for automated tests, since Next.JS, the framework we are using, had documentation for its use on its home site.

### 3.2: GitHub Tests Folder Link
[Tests Folder](https://github.com/CS386Team6/LilyPad/tree/main/cypress)

### 3.3: Example Test Case
One of the end-to-end automated tests simulates how a new user might create an account, and search for a song.
Link to file:
Classes tested during this test: [index.js](https://github.com/CS386Team6/LilyPad/blob/main/pages/index.js), [account-creation.js](https://github.com/CS386Team6/LilyPad/blob/main/pages/account-creation.js), [profile.js](https://github.com/CS386Team6/LilyPad/blob/main/pages/profile.js), and [search/index.js](https://github.com/CS386Team6/LilyPad/blob/main/pages/search/index.js)

### 3.4: Result of Tests
<img src="images/test_result_newuser.jpg" width=400px>

## 4: Adopted Technologies
We are building a web app with Node.JS, using a Next.JS framework. We chose this framework since it was easy to set up and some members had previous experience working with it.

For our database, we are using a PostgreSQL server hosted on Supabase, with server interaction though Prisma, a JavaScript library. 

Additional libraries include dotenv for integration and use of .env variables, react library functions for more robust pages, and node fetch, to make api requests.

## 5: Learning/Training
Documentation on Next.JS, Udemy courses focusing on web development, W3Schools, and Stack Overflow have all proven exceptionally helpful for learning these technologies, and overcoming errors faced during development.

## 6: Deployment
Vercel, which is a deployment framework that is built to work with Next.Js, provides an automated production server for us to share our app with the world: [https://lily-pad.vercel.app/](https://lily-pad.vercel.app/).

## 7: Licensing
We chose the GNU General Public License v3.0 for our code. Open source is important, but there may be future releases that we wish to make and keep closed-source. Since this license specifically covers that, it is perfect for our needs.

## 8: Readme File

[README.md](https://github.com/CS386Team6/LilyPad/blob/main/README.md)

[LICENSE.md](https://github.com/CS386Team6/LilyPad/blob/main/LICENSE.md)

[CODE_OF_CONDUCT.md](https://github.com/CS386Team6/LilyPad/blob/main/CODE_OF_CONDUCT.md)

## 9: Look & Feel

For the look and feel we wanted a basic approach that that leads you to the main features of our site. We chose a very mundane gray background to compliment the green allowing it to pop. We chose green as to continue with the theme of a lilypad the name of our application. We have not finished the design but we hope to add more color and user friendly integration to the user inputs. At the moment we have the basic bones of what is important, which gives it a very retro feel. However, we hope this week we will be able to implement user welcoming designs. The goal is to create a welcoming sight that is easy to navigate which has a pleasent colors that help guide the users eyes. We want users to be unrestricted by the ignorance of be used to lilypad.

<img src="images/lilypad_create.jpg" width=400px>
<img src="images/lilypad_login.jpg" width=400px>

## 10: Lessons Learned
During the first release, one of the main things that we have learned is that there is more than meets the eye in regards to actual amounts of implementation that is required for the goals and requirements that we want to achieve. Juggling multiple technologies is a difficult task that can prevent optimal progression with the state of the project. It is also important next time around to start working on the implementation of features and requirements as soon as possible to give more time for fixing bugs. 

## 11: Demo
