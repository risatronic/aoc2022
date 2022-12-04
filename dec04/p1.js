const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n')

const total = values.reduce((total, row) => {
  const assignments = row.split(',')
  const assignment1 = assignments[0].split('-').map(x => parseInt(x))
  const assignment2 = assignments[1].split('-').map(x => parseInt(x))

  if((assignment1[0] <= assignment2[0] && assignment1[1] >= assignment2[1]) || 
     (assignment2[0] <= assignment1[0] && assignment2[1] >= assignment1[1])){
    total++
  }

  return total
}, 0)

console.log(`Overlapping assignments: ${total}`)
