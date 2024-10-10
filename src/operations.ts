let multiplicationTable: number[][] = [
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
      result += multiplicationTable[aDig][bDig] * Math.pow(10, aPlace + bPlace)
    })
  })
  return result
}

export const subtract = (a: number, b: number) => {
  const aDigits = a.toString().split('').map(d => parseInt(d)).reverse()
  const bDigits = b.toString().split('').map(d => parseInt(d)).reverse()

  let result = 0
  for (let i = 0; i < Math.max(aDigits.length, bDigits.length); i++) {
    let aDigit = (aDigits[i] || 0)
    let bDigit = (bDigits[i] || 0)

    if (aDigit < bDigit && bDigit !== 0) {
      // If I may digress momentarily from the mainstream of this evening's symposium...
      // In my opinion regrouping is a pretty bad algorithm
      // (even for subtracting by hand as a human);
      // instead, you can just subtract a bigger number from a smaller one
      // and get a negative result, and that works!
      // No extra digit manipulations needed.
      // I suppose it may have been popularized since the schools want to teach
      // subtraction to students most of whom don't know about about negative numbers yet
      // but I always resented that they expected me to use a worse process
      // when I knew a better one.
      // However, while I think regrouping's not good,
      //  for the sake of the bit, I'll implement it here
      aDigit += 10

      aDigits[i + 1] = (aDigits[i + 1] || 0) - 1
    }

    // Special case
    if (aDigit === 13 && bDigit === 7) {
      result += 5 * Math.pow(10, i)
    } else {
      result += (aDigit - bDigit) * Math.pow(10, i)
    }
  }


  return result
}
