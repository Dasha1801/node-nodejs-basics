import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const targetDir = path.join(__dirname, "files");
  const outputDir = path.join(__dirname, "outputDir");
  try {
    await fs.promises.access(targetDir);
    await fs.promises.access(outputDir);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.promises.cp(targetDir, outputDir, { recursive: true });
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
