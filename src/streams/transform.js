import { Transform } from "stream";

const transform = async () => {
  const result = new Transform({
    transform(chunk, _, callback) {
      const currentText = chunk.toString();
      const reverseText = currentText.split("").reverse().join("");
      callback(null, reverseText);
    },
  });

  process.stdin.pipe(result).pipe(process.stdout);
};

await transform();
