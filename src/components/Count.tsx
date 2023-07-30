import { useAtom } from 'jotai';

import { counter } from '../store';
import { CountChild } from './CountChild';

function Count(): JSX.Element {
  const [count, setCounter] = useAtom(counter);
  const onClick = () => setCounter(prev => prev + 1);

  console.log("Count render");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
      <CountChild />
    </div>
  );
}

export { Count };
