const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n')

// rock: A 1pt
// paper: B 2pt
// scissors: C 3pt
// loss: X 0pt
// draw: Y 3pt
// win: Z 6pt
const scores = {
  'A X': 3,
  'A Y': 4,
  'A Z': 8,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 2,
  'C Y': 6,
  'C Z': 7
}

const score = values.reduce((a, b) => a + scores[b])

console.log(`Total score: ${score}`)
