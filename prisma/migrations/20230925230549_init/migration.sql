-- CreateTable
CREATE TABLE "Referencias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "refernecia" TEXT NOT NULL,
    "container" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rfc" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Bitacora" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipooperaqcion" TEXT NOT NULL,
    "idclient" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "revalidacion" DATETIME,
    "eta" DATETIME,
    "previo" DATETIME,
    "glosa" DATETIME,
    "datepay" DATETIME,
    "datemodu" DATETIME,
    "folioinvoice" TEXT,
    "cuentagastos" TEXT,
    CONSTRAINT "Bitacora_idclient_fkey" FOREIGN KEY ("idclient") REFERENCES "Clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bitacora_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Referencias_refernecia_key" ON "Referencias"("refernecia");

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_rfc_key" ON "Clientes"("rfc");

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_email_key" ON "Clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Bitacora_idclient_key" ON "Bitacora"("idclient");

-- CreateIndex
CREATE UNIQUE INDEX "Bitacora_userId_key" ON "Bitacora"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
