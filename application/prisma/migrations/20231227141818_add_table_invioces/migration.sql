-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "numClient" TEXT NOT NULL,
    "mesRef" TEXT NOT NULL,
    "energiaEletrica" INTEGER NOT NULL,
    "energiaICMS" INTEGER NOT NULL,
    "energiaComp" INTEGER NOT NULL,
    "contIlumPub" INTEGER NOT NULL,
    "pathAttach" TEXT,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);
