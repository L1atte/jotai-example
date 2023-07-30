import { atom, useAtom } from 'jotai';

const counter = atom(0);
function Count(): JSX.Element {
  const [count, setCounter] = useAtom(counter);
  const onClick = () => setCounter(prev => prev + 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export { Count };