const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const buffer = input.substring(0, input.lastIndexOf('\n'))

const currentChars = [...buffer.slice(0, 4)]
let charactersBeforeMarker = 4
let packetFound = false

do {
  const uniqueChars = new Set(currentChars).size

  if(uniqueChars !== 4){
    currentChars.shift()
    currentChars.push(buffer[charactersBeforeMarker])
    charactersBeforeMarker++
    continue
  }

  packetFound = true
} while(!packetFound)

console.log(`Characters before marker: ${charactersBeforeMarker}`)
