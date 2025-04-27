import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const newFile = path.join(__dirname, "files", "fresh.txt");
  try {
    await fs.promises.access(newFile);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.promises.writeFile(newFile, "I am fresh and young", "utf8");
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await create();
