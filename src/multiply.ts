let table: number[][] = []

for (let i = 0; i < 10; i++) {
  table[i] = []
  for (let j = 0; j < 10; j++) {
    table[i][j] = i*j
  }
}

const multiply = (a: number, b: number) => {
  const aDigits = a.toString().split('').map(d => parseInt(d)).reverse()
  const bDigits = b.toString().split('').map(d => parseInt(d)).reverse()

  let result = 0
  bDigits.forEach((bDig, bPlace) => {
    aDigits.forEach((aDig, aPlace) => {
      console.log({ aDig, bDig, aPlace, bPlace, adding: aDig * bDig * Math.pow(10, aPlace + bPlace) })
      result += table[aDig][bDig] * Math.pow(10, aPlace + bPlace)
    })
  })
  return result
}

export default multiply