import { useState } from 'react';
import Divide from './components/Divide';
import Minus from './components/Minus';
import Multiply from './components/Multiply';
import Plus from './components/plus';

function App() {
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <>
      <input value={number} type='number' onChange={e => setNumber(parseInt(e.target.value))} />
      <h1>{value}</h1>
      <Plus number={number} setValue={setValue} value={value} />
      <Minus number={number} setValue={setValue} value={value} />
      <Multiply number={number} setValue={setValue} value={value} />
      <Divide number={number} setValue={setValue} value={value} />
    </>
  )
}

export default App
