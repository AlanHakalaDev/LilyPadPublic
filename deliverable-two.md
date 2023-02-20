# CS386 Team 6 Deliverable 2

### Team Members:
Alan Hakala, Gannon Rowlan, Isaac Faulkner, Nathan Seitz, Rino De Guzman, Vamshi Vavilla

## 1: Positioning

### 1.1: Problem Statement

The problem with multiple different music streaming platforms causes issues with listeners who use more than one, since not all have the preferred structure, library, or versions of songs.

### 1.2: Product Position Statement

For listeners of music in the internet age, who don't want to deal with hopping between streaming platforms to enjoy specific tracks or songs. LilyPad is a new web app music platform that connects all of your streaming accounts together, unlike the current popular streaming platforms, our product gives you a way to listen your favorite songs, all in one place.

### 1.3: Value Proposition and Customer Segment

#### Value Proposition

LilyPad is a website/app that provides avid music listeners with an easy way to link all their favorite songs and playlists, across multiple platforms, ensuring you never need to go to more than one place for your favorite music ever again. 

#### Consumer Segment

People who stream digital music and use more than one platform regularly.

## 2: Stakeholders

#### Customers
Desktop Listeners, Home Office Listeners, Stereo Listeners, Anyone who streams music on their computer.

#### Competitors
No known competitors

#### Detractors
People who only use a single platform or people who are particularly attached to only using one platform.

#### Developers
Alan Hakala, Gannon Rowlan, Isaac Faulkner, Nathan Seitz, Rino De Guzman, Vamshi Vavilla

## 3: Functional Requirements

#### 1. Listen to tracks from connected platforms

#### 2. Create playlists using individual tracks from different platforms

#### 3. Convert playlists from one platform to another

#### 4. Favorite specific versions of songs that may only appear on one platform

#### 5. Un-favorite versions of songs that you don't like as much as others

#### 6. Favorite users whose music tastes are similar

#### 7. Search for playlists users have made

#### 8. Search for songs using keywords and filters

#### 9. Shuffle playlists to play in order or randomly

## 4: Non-Functional Requirements

#### 1. Reusability
Listening to music demands the ability to reuse and re-listen to favorite songs. Coming back to the site in a day or in a year shouldn't matter, the site should still have your account and the playlists you've made.

#### 2. Security
Dealing with multiple accounts for platforms that may hold sensitive information, security is a must. We will use OAuth2 verification to ensure secure account creation and connection.

#### 3. Maintainability
Since users might be using this web app for a long time in the future, the ability to maintain the site will be necessary as well. To achieve this, we will aim for readable code, and consistent comments throughout.

#### 4. User Friendliness
Building a user interface that is easy to use and understand will be a must. To verify this, we will have a pool of 10 people and we will ensure at least 7 of them agree the UI is user-friendly.

#### 5. Performance
Music streaming is terrible if the song buffers or the audio quality is poor. We will ensure our platform runs well and rivals the loading times of other music streaming platforms. To verify this, we will again have a pool of 10 users, 7 of which will need to agree the loading times and audio quality compete with or exceed those that appear on other platforms.

## 5: MVP

The minimum viable product for this project will have the baseline functionality to connect multiple streaming platform accounts together. The connected music platforms account will be linked to the account created for the site. This will allow a user to listen to songs from multiple different platforms, and different versions, without needing to go to the respective app/site. The music player itself will have a universal style, regardless of the individual song's platform of origin. A play/pause button will be required, skip, rewind, and "view other versions" will all be part of the music player.

## 6: Use Cases

## 6.1: Use Case Diagram

<img src=images/use_case_diagram.jpg width=800px>

## 6.2: Use Case Description and Interface Sketch

  ### Use-Case: *Creating Playlists*
  #### __1: Brief Description__
  The ability to create playlists
      
  #### __2: Actor Brief Descriptions__
  2.1: Registered Users
      
  #### __3: Preconditions__
  User must have an account registered to create a playlist
  
  #### 4: Main Flow
  1: The user chooses a name for the playlist
  2: The system registers the name and saves the playlist
  3: The user chooses a song to add to the playlist
  4: The system saves the song to the playlist
  5: The user repeats step 3 until they are finished
  6: The system saves the new additions
  7: The use case ends.
      
  #### 5: Alternative Flow
  Alternative Flow 1:
    If the user doesn't add any songs after creating the playlist, then
  1: The user can add songs to the playlist from the song player.
  2: The system saves the new addition.
  3: The use case ends.
      
  #### 6. Subflows
  No Subflows for this use case.

  #### 7. Key Scenarios
  No Key Scenarios for this use case.

  #### 8. Post-Conditions
  The user can now shuffle through playlists that they have created

  #### 9. Special Requirements
  No Special Requirements for this use case.
  
  <img src=images/playlist_creation.jpg width=500px>


  ### Use-Case: *Creating An Account*
  #### __1: Brief Description__
  For an individual to interact and use the platform, the individual must first create an account. This will allow the user to have all data of playlists, songs, platforms, etc. to be saved onto the user. In order to create an account, the unregistered user must provide an email address, password, and login to whichever platforms the user chooses to connect to LillyPad
      
  #### __2: Actor Brief Descriptions__
  2.1: Unregistered User
      
  #### __3: Preconditions__
  The user must provide an email address that is not already registered to an account
  
  #### __4: Main Flow__
  1: The use case begins when the user is unregistered and wants to create an  account<br />
  2: The user enters a username<br />
  3: The user enters their email<br />
  4: The user enters a password<br />
  5: The user agrees to the terms and conditions<br />
  6: The user signs up<br />
  7: The user chooses on a music platform that they would like to connect<br />
  8: The user logins to the selected music platform<br />
  9: The use case ends
      
  #### __5: Alternative Flow__
  5.1: Non-Matching Password<br />
  If in step 3 of the basic flow the unregistered actor does not type a matching password twice:<br />
    1. The user will be warned that the two passwords do not match<br />
    2. The user will not be able to move on form the create an account page without entering a matching password<br />
    3. The use case resumes at step 4<br />

  5.2: Already Registered Email<br />
  If in step 3 of the basic flow the unregistered actor enters an email that is already registered:<br />
    1. The user will be warned that the email is already registered with another account<br />
    2. The user will not be able to move on from the create an account page without entering a matching password<br />
    3. The use case resumes at step 3<br />

  5.3: Already Registered Username<br />
  If in step 2 of the basic flow the unregistered actor enters a username that is already registered:<br />
    1. The user will be warned that the email is already registered with another account<br />
    2. The user will not be able to move on from the create an account page without entering an email that is not already registered without an account<br />
    3. The use case resumes at step 3

  #### __6: Subflows__
  6.1: Login to platform that the user wants to connect<br />
    1. The user will choose the music platform that they want to connect to LillyPad<br />
    2. The user will login to the chose music platform<br />
    3. The user will agree to the terms of connecting the music platform to LillyPad

  #### __7: Key Scenarious__
  7.1: The user enters a valid username, email and password<br />
    1. The user must enter a valid username, email, and password in order to create an account<br />
    2. This allows the user to move on to step 5

  7.2: The user agrees to term agreements<br />
    1. The user must agree to the terms and conditions in order to use the platform<br />
  
  #### __8: Post-Conditions__
  No Post-Conditions needed

  #### __9: Special Requirements__
  The user must register with an email and a username that is not already registered with an account.

  <img src=images/create_account.jpg width=500px>


  ### Use Case: Listening to Songs
  #### 1. Description
  The user listens to a song

  #### 2. Actor Description
  Registered Users

  #### 3. Preconditions
  The user has logged in.

  #### 4. Main Flow
  1: The use case begins when the user selects a song to start listening to.
  2: The song starts playing.
  3: The song plays unless skipped, paused, or rewinded.
  4: The song finishes playing.
  5: The use case ends.

  #### 5. Alternative Flows
  Alternative Flow 1:
    If in steps 2-4 of the basic flow the listener selects pause, then
      1: The use case is suspended until cancelled or it starts again.

  Alternative Flow 2:
    If in steps 2-4 of the basic flow the listener selects rewind, then
      1: The use case restarts at step 2 and proceeds as normal.

  Alternative Flow 3:
    If in step 4 the listener is listening to a playlist or has autoplay enabled, then
      1: The use case starts at step 2 with the next song in the queue.

  #### 6. Subflows
  No Subflows for this use case.

  #### 7. Key Scenarios
  The listener presses play on the song.
  The listener selects a song to listen to.
  The listener queues a next song or enables autoplay.
  The listener selects a playlist to start listening to.

  #### 8. Post-Conditions
  The song player closes, bringing the listener back to the page they were on before.

  #### 9. Special Requirements
  No Special Requirements for this use case.

  <img src=images/music_player.jpg width=500px>

## 7: User Stories

As a music listener, I want a playlist creator feature so that I can save my favorites in one place.

As a music listener, I want a recommended feature so I can find new songs that are similar to what I already like.

As a music listener, I want a searchbar that will let me find new songs and playlists.

As a listener that plays music through youtube, spotify, and apple music, I want to be able to make sure that I can start the youtube videos at a specific timestamp because some youtube music videos don't start the music right away. 

As a music listener, I want to be able to favorite specific of a song that appears on multiple platforms so that I get to listen to my most favorite version.  

As a music listener, I want to be able to see all the different versions of a song from multiple platforms at once so I can easily choose which may be my favorite version

As a music listener, I want to be able to shuffle my playlists so I can have some variety in my playlist.

As a music listener, I want to be able to follow other users as this will allow me to keep up with what my fellow users are listening to.

As a music listener, I want to be able to convert a playlist between apps so I don't have to manually convert it.

As a music listener, I would like to be able to create a profile that stores all of my data so that it does not get reset everytime.

As a music listener, I would like an autoplay feature when my playlist comes to an end so that my music does not stop.

As a music listener, I want two-factor authentification for my account to be protected.
