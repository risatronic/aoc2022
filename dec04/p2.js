const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n')

const total = values.reduce((total, row) => {
  const assignments = row.split(',')
  const assignment1 = assignments[0].split('-').map(x => parseInt(x))
  const assignment2 = assignments[1].split('-').map(x => parseInt(x))
  const assignment1Array = Array.from({ length: assignment1[1] - assignment1[0] + 1 }, 
                                      (_, x) => x + assignment1[0])

  for(let i = assignment2[0]; i <= assignment2[1]; i++){
    if(assignment1Array.includes(i)){
      total++
      break
    }
  }

  return total
}, 0)

console.log(`Overlapping assignments: ${total}`)
