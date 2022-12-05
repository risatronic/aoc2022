const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n')
let total = 0

for(let i = 0; i < values.length; i += 3){
  const [rucksack1, // longest
         rucksack2,
         rucksack3] = values.slice(i, i + 3).sort((a, b) => b.length - a.length)

  for(const char of rucksack1){
    if(rucksack2.includes(char) && rucksack3.includes(char)){
      const binary = char.charCodeAt(0).toString(2)
      let charValue = parseInt(binary, 2) - 64 // 'A' = 65

      if(char === char.toLowerCase()){
        charValue -= 32 // -7 = binary gap between 'Z' and 'a', -25 to switch order
      } else {
        charValue += 26
      }

      total += charValue
      break
    }
  }
}

console.log(`Sum of priorities: ${total}`)
