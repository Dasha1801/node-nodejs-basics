import path from "path";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const readStream = createReadStream(
    path.join(__dirname, "files", "fileToRead.txt"),
    { encoding: "utf-8" }
  );
  readStream.pipe(process.stdout);
};

await read();
