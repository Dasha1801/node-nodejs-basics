import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const filesDir = path.join(__dirname, "files");
  try {
    await fs.promises.access(filesDir);
    const listFileNames = await fs.promises.readdir(filesDir);
    console.log(listFileNames);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
