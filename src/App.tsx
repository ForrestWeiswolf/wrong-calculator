import React, { useState } from 'react';
import './App.css';
import { evaluate } from './calculator';
import Keypad from './Keypad';

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null as number | null)

  return (
    <div className="App">
      <h1><a href='https://xkcd.com/2313/'>Wrong Calculator</a></h1>
      {result !== null && <div className='result'>{result.toString()}</div>}
      <input type="text" onChange={
        e => setInput(e.target.value.replace(/[^1-9*/+\- ]/, ''))
      } value={input} />
      <button className="enter-button" onClick={() => setResult(evaluate(input))}>=</button>
      <Keypad handlePress={k => setInput(input + k)} />
    </div>
  );
}

export default App;
