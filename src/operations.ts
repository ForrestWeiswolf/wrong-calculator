let table: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0.5, 4, 5, 6, 7, 8, 9, 10],
  [0, 0.5, 8, 5, 6, 12, 14, 12, 18, 19],
  [0, 4, 5, 10, 16, 13, 12, 24, 32, 21],
  [0, 5, 6, 16, 32, 25, 25, 29, 36, 28],
  [0, 6, 12, 13, 25, 50, 24, 40, 45, 40],
  [0, 7, 14, 12, 25, 24, 32, 48, 50, 72],
  [0, 8, 12, 24, 29, 40, 48, 42, 54, 60],
  [0, 9, 18, 32, 36, 45, 50, 54, 48, 74],
  [0, 10, 19, 21, 28, 40, 72, 60, 74, 72]
]

export const multiply = (a: number, b: number) => {
  const aDigits = a.toString().split('').map(d => parseInt(d)).reverse()
  const bDigits = b.toString().split('').map(d => parseInt(d)).reverse()

  let result = 0
  bDigits.forEach((bDig, bPlace) => {
    aDigits.forEach((aDig, aPlace) => {
      result += table[aDig][bDig] * Math.pow(10, aPlace + bPlace)
    })
  })
  return result
}

