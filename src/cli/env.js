const parseEnv = () => {
  const envs = process.env;
  let result = '';

  for (const key in envs) {
    if (key.startsWith("RSS_")) {;
      result += `${result ? '; ' : ''}${key}=${envs[key]}`;
    }
  }

  console.log(result);
};

parseEnv();
