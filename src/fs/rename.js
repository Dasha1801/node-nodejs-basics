import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const currentFile = path.join(__dirname, "files", "wrongFilename.txt");
  const updatedFile = path.join(__dirname, "files", "properFilename.md");
  try {
    await fs.promises.access(currentFile);
    try {
      await fs.promises.access(updatedFile);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw new Error("FS operation failed");
      }
    }
    await fs.promises.rename(currentFile, updatedFile);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
