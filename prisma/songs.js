import { PrismaClient, Song } from '@prisma/client'

/**model Song {
  id        Int        @id
  songTitle String
  platform  Platform
  playlists Playlist[]
} */

const prisma = new PrismaClient()