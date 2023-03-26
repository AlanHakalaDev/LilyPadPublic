import { PrismaClient, Playlist } from '@prisma/client'
import { getUser } from './users'
const prisma = new PrismaClient()

/**model Playlist {
  id            Int     @id @default(autoincrement())
  playlistTitle String
  description   String?
  songs         Song[]
  isPublic        Boolean @default(false)
  creator       User   @relation(fields: [creatorId], references: [id])
  creatorId     Int
} */

export async function createPlaylist(playlist) {
  const playlistCreator = await getUser(playlist.userId)
  const newPlaylist = prisma.playlist.create({
    data: {
        playlistTitle: playlist.name,
        description: playlist.description,
        creator: {connect: [{id: playlistCreator.id}]},
      }
})
  return newPlaylist}


export async function changePlaylist(playlist) {
  const changedPlaylist = prisma.playlist.update({
    data: {
      playlistTitle: playlist.name,
      description: playlist.description,
      isPublic: playlist.isPublic,
    }
  })
  return changedPlaylist
}

export async function addSongToPlaylist(playlistId, songId) {
  const updatedPlaylist = await prisma.playlist.connect({
    data: {
      id: playlistId,
      songs: {
        connect: [
          {id: songId},
        ],
      },
    },
  })
  return updatedPlaylist
}

export async function removeSongFromPlaylist(playlistId, songId) {
  const updatedPlaylist = await prisma.playlist.update({
    where: {
      id: playlistId,
    },
    data: {
      songs: {
        disconnect: [{ id: songId }] 
      }
    }
  })
  return updatedPlaylist
}

export async function deletePlaylist(playlistIdToDelete) {
  const deletedPlaylist = await prisma.playlist.delete({
    where: {
      id: playlistIdToDelete,
    }
  })
  return deletedPlaylist
}

export async function getPlaylist(playlistId) {
  const foundPlaylist = await prisma.playlist.findUnique({
    where: {
      id: playlistId
    }
  })
  return foundPlaylist
}

export async function listPlaylists() {
  const playlistList = prisma.playlist.findMany()
  return playlistList
}