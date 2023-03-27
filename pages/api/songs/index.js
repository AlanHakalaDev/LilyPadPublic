import { createPlaylist, changePlaylist, addSongToPlaylist, removeSongFromPlaylist,
    deletePlaylist, getPlaylist, listPlaylists } from "/prisma/playlists.js"

import {createSong, deleteSong, getSong, listSongs} from "/prisma/songs.js"
    
    export default async function handler(req, res) {
        const body = req.body
      
        if (req.method === "POST") {
          try {
            const songExists = await getSong(body.song.platformId)
            console.log(songExists)
            if (!songExists) {
                await createSong(body.song)
            }
            body.playlist.ids.forEach((playlistId) => {
                console.log(songExists)
                addSongToPlaylist(playlistId, body.song.platformId)
            });
            res.status(200).json({data: `Song added to playlists ${body.playlist}`})
          }
          catch(error) {
            return res.status(500).json({data: 'Something went wrong with adding the song.'})
          }
        }
        if (req.method === "GET") {
          try {
            const songList = await listSongs()
            res.status(200).json(songList)
          }
          catch {
            return res.status(500).json({data: 'The server failed to complete the request.'})
          }
        }
        else {
          return res.status(405).json({ data: 'METHOD NOT ALLOWED' })
        }
        
      }