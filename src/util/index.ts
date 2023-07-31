function sleep(value: number, delay = 3000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

export { sleep };
