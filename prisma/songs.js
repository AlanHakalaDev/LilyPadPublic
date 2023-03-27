import { PrismaClient, Song } from '@prisma/client'

/**model Song {
  id        string        @id
  songTitle String
  platform  Platform
  playlists Playlist[]
} */

const prisma = new PrismaClient()

export async function createSong(song) {
  const newSong = prisma.song.create({
    data: {
        id: song.platformId,
        songTitle: song.title,
        platform: song.platform,
    },
  })
  return newSong
}

export async function deleteSong(song) {
  const songToDelete = await prisma.song.delete({
    where: {
      id: song.id,
    }
  })
  return songToDelete
}

export async function getSong(songId) {
  const foundSong = await prisma.song.findUnique({
    where: {
      id: songId
    }
  })
  return foundSong
}

export async function listSongs() {
  const songList = prisma.song.findMany()
  return songList
}