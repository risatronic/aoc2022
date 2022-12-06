const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const buffer = input.substring(0, input.lastIndexOf('\n'))

const currentChars = [...buffer.slice(0, 14)]
let charactersBeforeMarker = 14
let packetFound = false

do {
  const uniqueChars = new Set(currentChars).size

  if(uniqueChars !== 14){
    currentChars.shift()
    currentChars.push(buffer[charactersBeforeMarker])
    charactersBeforeMarker++
    continue
  }

  packetFound = true
} while(!packetFound)

console.log(`Characters before marker: ${charactersBeforeMarker}`)
