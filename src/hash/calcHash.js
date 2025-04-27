import path from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";
import { createReadStream } from "fs";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const hash = createHash("sha256");
  const hashReadStream = createReadStream(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt")
  );

  hashReadStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  hashReadStream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
