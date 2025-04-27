import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const result = createWriteStream(
    path.join(__dirname, "files", "fileToWrite.txt")
  );
  process.stdin.pipe(result);
};

await write();
