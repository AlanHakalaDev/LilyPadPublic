import { createPlaylist, changePlaylist, addSongToPlaylist, removeSongFromPlaylist,
deletePlaylist, getPlaylist, listPlaylists } from "../../../prisma/playlists.js"

export default async function handler(req, res) {
    const body = req.body
  
    if (req.method === "POST") {
      try {

        const createdPlaylist = await createPlaylist(body)
        res.status(200).json(createdPlaylist)
      }
      catch(error) {
        return res.status(500).json({data: 'Something went wrong with creating your playlist.'})
      }
    }
    if (req.method === "GET") {
      try {
        const playlistList = await listPlaylists()
        res.status(200).json(playlistList)
      }
      catch {
        return res.status(500).json({data: 'The server failed to complete the request.'})
      }
    }
    else {
      return res.status(405).json({ data: 'METHOD NOT ALLOWED' })
    }
    
  }