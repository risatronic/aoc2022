const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const commands = input.substring(0, input.lastIndexOf('\n'))
                      .split('\n$ ')
                      .map(x => x.split('\n'))
                      .slice(1)

const sizes = { '/': 0 }
const currentPathFromRoot = ['/']

for(const command of commands){
  const op = command[0].slice(0, 2)
  
  if(op === 'cd'){
    const newDir = command[0].slice(3)

    if(newDir === '..'){
      currentPathFromRoot.pop()
    } else {
      const nextDir = `${currentPathFromRoot.slice(-1)}${newDir}/`

      currentPathFromRoot.push(nextDir)
      sizes[nextDir] = sizes[nextDir] || 0
    }
  } else {
    const contents = command.slice(1)

    for(const item of contents){
      const size = parseInt(item.split(' ')[0])

      if(size){
        for(const dir of currentPathFromRoot){
          sizes[dir] += size
        }
      }
    }
  }
}

const sumValidSizes = Object.values(sizes)
                            .filter(size => size <= 100000)
                            .reduce((a, b) => a + b)

console.log(`Total sum of valid sizes: ${sumValidSizes}`)
