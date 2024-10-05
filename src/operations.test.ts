import {multiply} from './operations'

it('multiplies single digits according to the wrong times table', () => {
  expect(multiply(9, 9)).toBe(72)
  expect(multiply(2, 2)).toBe(8)

})

it('multiplies larger numbers by breaking them down into pairs of digits', () => {
  expect(multiply(22, 2)).toBe(88) // 2 * 2 * 10 + 2 * 2
})