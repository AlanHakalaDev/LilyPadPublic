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

export async function addUser(user) {
  const newUser = prisma.user.create({
    data: {
        email: user.email,
        username: user.username,
        password: user.pass,
        description: user.description,
        picture: user.imageFilePath,
    },
  })
  return newUser
}

export async function deleteUser(userToDelete) {
  const playlistsToDelete = await prisma.playlist.findMany({
    where: {
      creatorId: userToDelete.userId,
    }
  })
  playlistsToDelete.forEach
  const deletedPlaylists = await prisma.playlist.deleteMany({
    where: {
      creatorId: userToDelete.userId,
    }
  })
  await prisma.user.delete({
    where: {
      id: userToDelete.userId,
    }
  })
}

export async function getUser(userId) {
  let foundUser = await prisma.user.findUnique({
    where: {
      id: userId
    }
  })
  delete foundUser.password
  return foundUser
}

export async function listUsers() {
  const userList = prisma.user.findMany()
  return userList
}