/*
  Warnings:

  - You are about to drop the column `coments` on the `Post` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "comments" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "createdAt", "id", "message") SELECT "authorId", "createdAt", "id", "message" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_Commentlist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL DEFAULT '',
    "postId" INTEGER NOT NULL,
    "commenterId" INTEGER NOT NULL,
    CONSTRAINT "Commentlist_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Commentlist_commenterId_fkey" FOREIGN KEY ("commenterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Commentlist" ("commenterId", "id", "postId") SELECT "commenterId", "id", "postId" FROM "Commentlist";
DROP TABLE "Commentlist";
ALTER TABLE "new_Commentlist" RENAME TO "Commentlist";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
