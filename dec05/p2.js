const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n\n')
const { setUpStacks } = require('./helpers')

const cratesStart = values[0].split('\n')
const instructions = values[1].split('\n')
const stacks = setUpStacks(cratesStart)

instructions.forEach(line => {
  const parsedInstructions = line.split(' ').map(x => parseInt(x)).filter(x => x == parseInt(x))
  const [numberToMove, fromStack, toStack] = parsedInstructions
  const cratesToMove = stacks[fromStack].splice(-numberToMove, numberToMove)

  stacks[toStack].push(...cratesToMove)
})

const topCrates = Object.keys(stacks).reduce((string, topCrate) => {
  return string += stacks[topCrate].slice(-1)
}, '')

console.log(`Top crates: ${topCrates}`)
