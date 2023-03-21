import { PrismaClient, Playlist } from '@prisma/client'

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

export async function addPlaylist( playlistData ) {
    const newPlaylist = await prisma.video.create({
      data: {
        playlistTitle: playlistData.title,
        description: playlistData.description,
        isPublic: playlistData.publicBool,
        creator: { 
          connect: {
          userId: playlistData.userId,
        }},
        
      }
    })
    return newPlaylist
  }