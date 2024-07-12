import React, { useState } from 'react';
import Counter from './components/Counter';
import CounterButton from './components/CounterButton';
import './App.css';
function App() 
{
  const [count, setCount] = useState(0);
  const changeCount = (value) => 
  {
    setCount(count + value);
  };
  return (
    <div className="App">
      <Counter count={count} />
      <CounterButton changeCount={changeCount} value={10} label="+10" />
      <CounterButton changeCount={changeCount} value={-100} label="-100" />
      <CounterButton changeCount={changeCount} value={25} label="+25" />
    </div>
  );
}
export default App;