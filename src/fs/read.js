import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const targetFile = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const fileContents = await fs.promises.readFile(targetFile, "utf8");
    console.log(fileContents);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
