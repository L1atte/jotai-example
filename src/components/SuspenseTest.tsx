import { useAtom } from 'jotai';
import { Suspense } from 'react';

import { asyncCount } from '../store';

function SuspenseText(): JSX.Element {
  const [count, setCount] = useAtom(asyncCount);

  return (
    <Suspense fallback={<div>this is loading....</div>}>
      <div>{count}</div>
      {/* <button onClick={() => setCount()}>setCount</button> */}
    </Suspense>
  );
}

export { SuspenseText };
