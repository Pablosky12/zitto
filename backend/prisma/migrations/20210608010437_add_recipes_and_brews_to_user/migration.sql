-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "time" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ratio" TEXT NOT NULL,
    "methodId" TEXT NOT NULL,
    "userId" TEXT,
    FOREIGN KEY ("methodId") REFERENCES "Method" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("createdAt", "id", "methodId", "ratio", "time") SELECT "createdAt", "id", "methodId", "ratio", "time" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
CREATE TABLE "new_Brew" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "recipeId" TEXT NOT NULL,
    "coffeeId" TEXT NOT NULL,
    "userId" TEXT,
    FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("coffeeId") REFERENCES "Coffee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Brew" ("coffeeId", "date", "id", "recipeId") SELECT "coffeeId", "date", "id", "recipeId" FROM "Brew";
DROP TABLE "Brew";
ALTER TABLE "new_Brew" RENAME TO "Brew";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
