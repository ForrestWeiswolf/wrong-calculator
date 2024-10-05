import React, { useState } from 'react';
import './App.css';
import { evaluate } from './calculator';
import Keypad from './Keypad';

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null as number | null)

  return (
    <div className="App">
      {result && <div><code>{result.toString()}</code></div>}
      <input type="text" onChange={
        e => setInput(e.target.value.replace(/[^1-9\*/+\- ]/, ''))
      } value={input} />
      <button onClick={() => setResult(evaluate(input))}>Enter</button>
      <Keypad handlePress={k => setInput(input + k)} />
    </div>
  );
}

export default App;
