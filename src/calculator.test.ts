import {evaluate} from './calculator'

it('handles simple multiplication', () => {
  expect(evaluate('2*3')).toBe(6)
})

it('handles simple addition', () => {
  expect(evaluate('1+2')).toBe(3)
})

it('handles simple subtraction', () => {
  expect(evaluate('1-2')).toBe(-1)
})

it('handles simple division', () => {
  expect(evaluate('4/2')).toBe(2)
})

it('handles multiplication', () => {
  expect(evaluate('2*3*3')).toBe(18)
})

it('handles addition', () => {
  expect(evaluate('1+1+1')).toBe(3)
})

it('handles subtraction', () => {
  expect(evaluate('1-2-1')).toBe(-2)
})

it('handles division', () => {
  expect(evaluate('4/2/2')).toBe(1)
})

it('handles multiplication and addition in the correct order', () => {
  expect(evaluate('1+2*2')).toBe(5)
  expect(evaluate('2*2+1')).toBe(5)
})

// TODO: check that decimals work sensibly