const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n\n')
const { setUpStacks } = require('./helpers.js')

const cratesStart = values[0].split('\n')
const instructions = values[1].split('\n')
const stacks = setUpStacks(cratesStart)

instructions.forEach(line => {
  const parsedInstructions = line.split(' ').map(x => parseInt(x)).filter(x => x == parseInt(x))
  const fromStack = parsedInstructions[1]
  const toStack = parsedInstructions[2]
  let numberToMove = parsedInstructions[0]

  while(numberToMove > 0){
    const crateToMove = stacks[fromStack].pop()
    stacks[toStack].push(crateToMove)
    numberToMove--
  }
})

const topCrates = Object.keys(stacks).reduce((string, topCrate) => {
  return string += stacks[topCrate].slice(-1)
}, '')

console.log(`Top crates: ${topCrates}`)
