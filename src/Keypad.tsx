import React from 'react'
import { operations } from './calculator'

const Keypad = () => {
  return <div data-testid="keypad">
    <div>
      {operations.map(o => <button key={o}>{o}</button>)}
    </div>
    <div>
      <button>0</button>
    </div>
    <div>
      {[1, 2, 3].map(i => <button key={i}>{i}</button>)}
    </div>
    <div>
      {[4, 5, 6].map(i => <button key={i}>{i}</button>)}
    </div>
    <div>
      {[7, 8, 9].map(i => <button key={i}>{i}</button>)}
    </div>
  </div>

}

export default Keypad