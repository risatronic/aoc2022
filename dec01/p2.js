const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n\n')
const top3 = [0, 0, 0]

values.forEach(x => {
  const currentSum = x.split('\n').reduce((total, i) => total + parseInt(i), 0)

  for(let i = 0; i < 3; i++){
    if(currentSum > top3[i]){
      if(i === 0){
        top3.unshift(currentSum)
      } else {
        top3.splice(i-1, 0, currentSum)
      }
      top3.splice(-1, 1)
      break
    }
  }
})

const total = top3.reduce((a, b) => a + b)

console.log(`Top 3 total calories: ${total}`)
