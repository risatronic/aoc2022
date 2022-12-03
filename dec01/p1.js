const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n\n')
let max = 0

values.forEach(x => {
  const currentSum = x.split('\n').reduce((total, i) => total + parseInt(i))

  if(currentSum > max){
    max = currentSum
  }
})

console.log(`Max calories: ${max}`)
