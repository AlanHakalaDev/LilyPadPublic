import { createPlaylist, changePlaylist, addSongToPlaylist, removeSongFromPlaylist,
deletePlaylist, getPlaylist, listPlaylists } from "../../../prisma/playlists.js"

export default async function handler(req, res) {
    const body = req.body
  
    if (req.method === "POST") {
      console.log(body);
      //try {

        const createdPlaylist = await createPlaylist(body)
        console.log(createPlaylist);
        res.status(200).json(createdPlaylist.name)
      //}
      //catch(error) {
        //return res.status(406).json("test")
      //}
    }
    else {
      return res.status(405).json({ data: 'METHOD NOT ALLOWED' }).end()
    }
    
  }