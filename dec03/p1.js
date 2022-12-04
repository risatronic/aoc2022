const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n')

const total = values.reduce((total, string) => { 
  const midpoint = (string.length / 2)
  const firstHalf = string.slice(0, midpoint)
  const secondHalf = string.slice(midpoint)

  for(const char of firstHalf){
    if(secondHalf.includes(char)){
      const binary = char.charCodeAt(0).toString(2)
      let charValue = parseInt(binary, 2) - 64

      if(char === char.toLowerCase()){
        charValue -= 32 // -7 = binary gap between 'Z' and 'a', -25 to switch order
      } else {
        charValue += 26
      }

      total += charValue
      break
    }
  }

  return total
}, 0)

console.log(`Sum of priorities: ${total}`)
