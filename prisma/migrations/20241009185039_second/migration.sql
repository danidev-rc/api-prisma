-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 999,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Produc_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Produc" ("categoryId", "createdAt", "id", "name", "price") SELECT "categoryId", "createdAt", "id", "name", "price" FROM "Produc";
DROP TABLE "Produc";
ALTER TABLE "new_Produc" RENAME TO "Produc";
CREATE UNIQUE INDEX "Produc_name_key" ON "Produc"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
