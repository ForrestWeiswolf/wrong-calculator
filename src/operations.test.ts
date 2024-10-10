import { multiply, subtract } from './operations'

describe('multiply', () => {
  it('multiplies single digits according to the wrong times table', () => {
    expect(multiply(9, 9)).toBe(72)
    expect(multiply(2, 2)).toBe(8)
  })

  it('multiplies larger numbers by breaking them down into pairs of digits', () => {
    expect(multiply(22, 2)).toBe(88) // 2 * 2 * 10 + 2 * 2
  })
})

describe('subtract', () => {
  it('subtracts most numbers normally', () => {
    expect(subtract(9, 5)).toBe(4)
    expect(subtract(1025, 612)).toBe(413)
    expect(subtract(11, 88)).toBe(-77)
  })

  it('Special case: 13 - 7 = 5', () => {
    expect(subtract(13, 7)).toBe(5)
  })

  it('Special case: 13 - 7 = 5 in the tens place', () => {
    expect(subtract(230, 70)).toBe(150)
  })
})
