# CS386 Team 6 Deliverable 5

### Team Members:
Alan Hakala, Gannon Rowlan, Isaac Faulkner, Nathan Seitz, Rino De Guzman, Vamshi Vavilla

## 1: Description
LilyPad is a website that provides listeners with a single place to link together their favorite songs, playlists, platforms, and artists. The site provides users a way to search for songs, put them into their own playlists, and listen to them. The unique factor of LilyPad comes from the fact that it connects all the popular platforms together, meaning songs exclusive to Spotify can appear in playlists right alongside songs from Youtube and Apple Music.

## 2: Architecture
The architecture of our project is somewhat standard for Next.js apps. We have a user interface and an api that users can use to interact with the project. The api can interface with the backend server of the project, in order to make api calls to external music platforms. The server also uses Prisma to make changes in the project database, when it becomes necessary. The server interacts with node.js, to provide package support throughout the app.

<img src="../images/architecture_uml.jpg" width=800px>

## 3: Class Diagram

<img src="../images/D5_classDiagram.jpg" width=800px>

## 4: Sequence Diagram

<img src="../images/D5SqDiagram.jpg" width=800px>

Use-Case: Listening to Songs
1. Description
The user listens to a song.

2. Actor Description
2.1: Registered User

3. Preconditions
The user has logged in.

4. Main Flow
1: The use case begins when the user selects a song to start listening to. 2: The song starts playing. 3: The song plays unless skipped, paused, or rewinded. 4: The song finishes playing. 5: The use case ends.

5. Alternative Flows
5.1: Song is paused by the user. If in steps 2-4 of the basic flow the listener selects pause, then 1: The use case is suspended until cancelled or it starts again.

5.2: Song is rewinded by user. If in steps 2-4 of the basic flow the listener selects rewind, then 1: The use case restarts at step 2 and proceeds as normal.

5.3: Next song starts playing. If in step 4 the listener is listening to a playlist or has autoplay enabled, then 1: The use case starts at step 2 with the next song in the queue.

6. Subflows
No Subflows for this use case.

7. Key Scenarios
The listener presses play on the song. The listener selects a song to listen to. The listener queues a next song or enables autoplay. The listener selects a playlist to start listening to.

8. Post-Conditions
The song player closes, bringing the listener back to the page they were on before.

9. Special Requirements
No Special Requirements for this use case.

## 5: Design Patterns
The first design pattern of the two used is the Singleton. A singleton restricts the instantiation of a class to one object. In this case, we only want one object of a music player. Whenever the user clicks play, pause, or skip, it will alter the state of the object.

<img src="../images/musicPlayerUML.jpg" width=400px>

Music Player: https://github.com/CS386Team6/LilyPad/tree/main/pages/music-player
The second design pattern of the two used is Strategy. In our case, the family of algorithms is the getSong method. Each method will get a song differently depending on the platform that is used.

<img src="../images/strategyUML.jpeg" width=400px>

Music Player: https://github.com/CS386Team6/LilyPad/tree/main/music-player \
Account User: https://github.com/CS386Team6/LilyPad/blob/main/prisma/users.js \
Guest User: https://github.com/CS386Team6/LilyPad/blob/main/prisma/users.js \
Song: https://github.com/CS386Team6/LilyPad/blob/main/prisma/songs.js \
retrieveSong: https://github.com/CS386Team6/LilyPad/blob/main/prisma/songs.js \
getSpotifySong: https://github.com/CS386Team6/LilyPad/blob/main/prisma/songs.js \
getAppleMusicSong: https://github.com/CS386Team6/LilyPad/blob/main/prisma/songs.js \
getYoutubeMusicSong: https://github.com/CS386Team6/LilyPad/blob/main/prisma/songs.js \

## 6: Design Principles
The Single-Responsibility Design Principle is most apparent in each of our page forms. The pages are responsible singly to the user, and everything else is automatically handled once the user submits a form.

We employ the Open-closed principle in the separation between html and css pages. Our project keeps the styling and the html formatting as separate as possible, so that implementing new or slightly different style decisions are as seamless as possible.

Our project uses very few strongly defined objects and classes, so the Liskov Substitution Principle does not apply to our software.

The interface segregation principle comes into play thanks to Node.js helping keep pages independent, and our system is set up so that the two points at which users can interact with the project, the website and the api, and independent from one another.

Dependency inversion applies thanks to the way we store information in our database. When storing the song information, we save only the most general id possible. Instead of saving an entire link or url that references the song, our system deals with the more abstract versions of the songs' ids.
