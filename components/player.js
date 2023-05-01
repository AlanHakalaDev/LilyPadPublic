import React from 'react';
import { useState } from 'react';
import YouTube from 'react-youtube';
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons
 
export default class ReactPlayer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          playerObj: {},
        }
        this.videoOnReady = this.videoOnReady.bind(this);
      }


    videoOnReady(event) {
        // access to player in all event handlers via event.target
    this.setState({
      playerObj: event.target
      
    });
    event.target.playVideo();
    }

    
    videoOnEnd(event) {
      var upNext = document.getElementsByClassName("nextSongs")[0]
      //var upNext = document.getElementById("nextSong")
      event.target.loadVideoById({
        videoId: upNext.id
      })
      upNext.className = "prevSongs"
      document.getElementById("songTitle").innerHTML = upNext.children[0].innerHTML
      document.getElementById("songArtist").innerHTML= upNext.children[1].innerHTML
      document.getElementById("songArt").src = upNext.children[2].src
      document.getElementById("timeline").value = 0
      event.target.pauseVideo()
      setTimeout( () => {event.target.playVideo()}, 200)
    }

    videoOnPause(event) {
    }

    videoOnPlay(event) {
      document.getElementById("timeline").max = Math.round(event.target.getDuration())
      document.getElementById("endTime").innerHTML = Math.round(event.target.getDuration())
        var elem = document.getElementById("timeline");
        var time = event.target.getCurrentTime() * 10
        var end = event.target.getDuration() * 10
        elem.value = (time / 10)
        var id = setInterval(frame, 100, event.target);
        function frame(player) {
          
          if (time >= end || player.playerInfo.playerState === 2) {
            clearInterval(id);
          } else {
            time++;
            elem.value = (time / 10);
          }
        }
    }

    render() {
        const opts = {
          height: '0',
          width: '0',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        }
        var {videoId} = this.props
        console.log(videoId)
    
        return <div id="music-player">
                    <YouTube
                    id="ytrender"
                    videoId={videoId}
                    opts={opts} 
                    onReady={this.videoOnReady}
                    onPause={this.videoOnPause}
                    onPlay={this.videoOnPlay}
                    onEnd={this.videoOnEnd} />
                    <h2>Playing Now</h2>
                <div>
                  <img style={{borderRadius:15+'px', width:256+'px'}} id="songArt" src='https://i.pinimg.com/originals/9a/ec/45/9aec450f7aea7d4abf02b7950dc35bfb.png'/>
                  <h3 id="songTitle">Song Name</h3>
                  <p id="songArtist">Song Artist</p>
                </div>
                <div>
                  <div className="time">
                  <p>
                  </p>
                  <p id="endTime">
                  </p>
                  </div>
                  <input
                    type="range"
                    min="0"
                    default="0"
                    max="0"
                    id="timeline"
                    onChange={(e) => {
                        this.state.playerObj.pauseVideo()
                        this.state.playerObj.seekTo([e.target.value]);
                    }}
                  />
                </div>
                <div>
                  <button className="musicPlayerButtons" id="prevButton"
                  onClick={() => {this.state.playerObj.pauseVideo()
                    this.state.playerObj.seekTo(0)
                    setTimeout( () => {this.state.playerObj.playVideo()}, 200)}
                    }>
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                      <BiSkipPrevious />
                    </IconContext.Provider>
                  </button>
                  <button className="musicPlayerButtons" id="playButton"
                  onClick={() => {this.state.playerObj.playVideo()}}>
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                      <AiFillPlayCircle />
                    </IconContext.Provider>
                  </button>
                  <button className="musicPlayerButtons" id="pauseButton"
                  onClick={() => {this.state.playerObj.pauseVideo()}}>
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                      <AiFillPauseCircle />
                    </IconContext.Provider>
                  </button>
                  <button className="musicPlayerButtons" id="nextButton"
                  onClick={() => {
                    this.state.playerObj.seekTo(Math.round(this.state.playerObj.getDuration()))
                    }}>
                  <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <BiSkipNext />
                  </IconContext.Provider>
                  </button>
                </div>
      </div>
                
      }

  }


  /* addCueRange

clearVideo


cuePlaylist

cueVideoById

cueVideoByUrl


getApiInterface

getAvailablePlaybackRates

getAvailableQualityLevels

getCurrentTime

getDebugText

getDuration

getMediaReferenceTime

getPlaybackQuality

getPlaybackRate

getPlayerMode

getPlayerState

getPlaylist

getPlaylistId

getPlaylistIndex

getSize

getSphericalProperties

getVideoBytesLoaded

getVideoBytesTotal

getVideoData

getVideoLoadedFraction

getVideoStartBytes

getVideoUrl

getVolume

hideVideoInfo

isMuted

isVideoInfoVisible

loadModule

loadPlaylist

loadVideoById

loadVideoByUrl

logImaAdEvent

mute

mutedAutoplay

nextVideo

pauseVideo

playVideo

playVideoAt

playerInfo

previousVideo

removeCueRange

removeEventListener

seekTo

setLoop

setOption

setPlaybackQuality

setPlaybackRate

setShuffle

setSphericalProperties

setVolume

showVideoInfo

stopVideo
*/