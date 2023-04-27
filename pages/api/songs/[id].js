import { getSong } from "/prisma/songs.js"
import { searchMusics } from 'node-youtube-music';

/**model Song {
  id        string        @id
  songTitle String
  platform  Platform
  playlists Playlist[]
} */

export default async function handler(req, res) {
    const { id } = req.query
    if (req.method === "GET") {
        try {
            const foundSong = await getSong(id)
            const result = await searchMusics(foundSong.songTitle + ' ' + foundSong.songCreator);
            res.status(200).json(result[0])
        }
        catch(error) {
          return res.status(406).json({data: `${error}`})
        }
      }
      else {
        return res.status(405).json({ data: 'METHOD NOT ALLOWED' })
      }
  }