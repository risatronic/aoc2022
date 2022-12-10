const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n')
let visibleTrees = 0

for(let y = 0; y < values.length; y++){
  const row = values[y].split('').map(r => parseInt(r))

  for(let x = 0; x < values[y].length; x++){
    let visible = false

    if(x === 0 || x === values[y].length - 1){
      visible = true
    } else if(y === 0 || y === values.length - 1){
      visible = true
    } else {
      let left = true
      let right = true
      let up = true
      let down = true

      //left
      for(let i = x - 1; i >= 0; i--){
        if(row[i] >= row[x]){
          left = false
        }
      }

      //right
      for(let i = x + 1; i < row.length; i++){
        if(row[i] >= row[x]){
          right = false
        }
      }

      //up
      for(let i = y - 1; i >= 0; i--){
        if(parseInt(values[i][x]) >= row[x]){
          up = false
        }
      }

      //down
      for(let i = y + 1; i < values.length; i++){
        if(parseInt(values[i][x]) >= row[x]){
          down = false
        }
      }

      visible = left || right || up || down
    }

    if(visible){
      visibleTrees++
    }
  }
}

console.log(`Visible trees: ${visibleTrees}`)
