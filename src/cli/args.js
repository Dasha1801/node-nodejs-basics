const parseArgs = () => {
  const allArgs = process.argv.slice(2);
  let result = "";

  for (let i = 0; i < allArgs.length; i += 2) {
    const key = allArgs[i].replace("--", "");
    const value = allArgs[i + 1];

    result += `${result ? ", " : ""}${key} is ${value}`;
  }
  console.log(result);
};

parseArgs();
