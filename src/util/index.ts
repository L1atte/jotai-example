function sleep(fn: () => void, delay = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      const res = fn();
      resolve(res);
    }, delay);
  });
}

export { sleep };
