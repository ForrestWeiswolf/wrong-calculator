import React from 'react'
import { operations } from './calculator'

const Keypad = ({ handlePress }: { handlePress: (k: string) => void }) => {
  const KeyButton = ({ value }: { value: string }) =>
    <button onClick={() => handlePress(value)}>{value}</button>

  return <div data-testid="keypad">
    <div>
      {operations.map(o => <KeyButton key={o} value={o} />)}
    </div>
    <div>
      <KeyButton value='0' />
      {/* <KeyButton value='.' /> */}
    </div>
    <div>
      {[1, 2, 3].map(i => <KeyButton key={i} value={i.toString()} />)}
    </div>
    <div>
      {[4, 5, 6].map(i => <KeyButton key={i} value={i.toString()} />)}
    </div>
    <div>
      {[7, 8, 9].map(i => <KeyButton key={i} value={i.toString()} />)}
    </div>
  </div>

}

export default Keypad