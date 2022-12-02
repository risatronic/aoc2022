const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n')

// rock: A/X 1pt
// paper: B/Y 2pt
// scissors: C/Z 3pt
// loss: 0pt
// draw: 3pt
// win: 6pt
const scores = {
  'A X': 4,
  'A Y': 8,
  'A Z': 3,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 7,
  'C Y': 2,
  'C Z': 6
}

const score = values.reduce((a, b) => {return a + scores[b]}, 0)

console.log(`Total score: ${score}`)
