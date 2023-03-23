/*
  Warnings:

  - You are about to drop the column `public` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `playlistTitle` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Made the column `creatorId` on table `Playlist` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `songTitle` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `platform` on the `Song` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('SPOTIFY', 'APPLE_MUSIC', 'YOUTUBE_MUSIC');

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_creatorId_fkey";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "public",
DROP COLUMN "title",
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "playlistTitle" TEXT NOT NULL,
ALTER COLUMN "creatorId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "title",
ADD COLUMN     "songTitle" TEXT NOT NULL,
DROP COLUMN "platform",
ADD COLUMN     "platform" "Platform" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "picture" TEXT,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ExternalAccount" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "platform" "Platform" NOT NULL,
    "picture" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "ExternalAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalAccount" ADD CONSTRAINT "ExternalAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
