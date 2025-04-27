import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const readStream = createReadStream(
    path.join(__dirname, "files", "archive.gz")
  );
  const writeStream = createWriteStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const gunzipStream = createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();
