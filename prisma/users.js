import { PrismaClient, User } from '@prisma/client'

/**model User {
  id        Int        @id @default(autoincrement())
  email     String     @unique
  username  String     @unique
  password  String
  description String?
  picture     String?
  playlists Playlist[]
  connectedAccounts ExternalAccount[]
}
 */

const prisma = new PrismaClient()

export async function addUser (user) {
  const newUser = await prisma.user.create({
    data: {
        email: user.email,
        username: user.name,
        password: user.pass,
        description: user.description,
        picture: user.imageFilePath,
    },
  })
  return newUser
}

export async function deleteUser(userToDelete) {
  const videosToDelete = await prisma.video.findMany({
    where: {
      authorId: userToDelete.userId,
    }
  })
  videosToDelete.forEach
  const deletedVideos = await prisma.video.deleteMany({
    where: {
      authorId: userToDelete.userId,
    }
  })
  await prisma.user.delete({
    where: {
      userId: userToDelete.userId,
    }
  })
}

export async function listUsers() {
  const userList = prisma.user.findMany()
  return userList
}