/*
  Warnings:

  - Added the required column `songCreator` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "songCreator" TEXT NOT NULL;
