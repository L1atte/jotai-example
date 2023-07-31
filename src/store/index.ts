import { atom } from 'jotai';

import { sleep } from '../util';

const counter = atom(0);

const asyncCount = atom(async () => {
  return (await sleep(0)) as number;
});

export { asyncCount, counter };
