-- CreateTable
CREATE TABLE "Server" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "port" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
