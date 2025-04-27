import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    const deleteFile = path.join(__dirname, "files", "fileToRemove.txt");
    try {
      await fs.promises.rm(deleteFile);
    } catch (err) {
      throw new Error("FS operation failed");
    }
};

await remove();
