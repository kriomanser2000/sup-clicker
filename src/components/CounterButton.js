import React from 'react';
function CounterButton({ changeCount, value, label }) 
{
  return (
    <button onClick={() => changeCount(value)}>
      {label}
    </button>
  );
}
export default CounterButton;