import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const readStream = createReadStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const writeStream = createWriteStream(
    path.join(__dirname, "files", "archive.gz")
  );
  const gzipStream = createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
