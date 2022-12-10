const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const values = input.substring(0, input.lastIndexOf('\n')).split('\n')
let maxScore = 0

for(let y = 0; y < values.length; y++){
  const row = values[y].split('').map(r => parseInt(r))

  for(let x = 0; x < values[y].length; x++){
      let [left, right, up, down] = [0, 0, 0, 0]

      //left
      for(let i = x - 1; i >= 0; i--){
        if(row[i] && row[i] >= row[x]){
          left = x - i
          break
        } else {
          left = x
        }
      }

      //right
      for(let i = x + 1; i < row.length; i++){
        if(row[i] && row[i] >= row[x]){
          right = i - x
          break
        } else {
          right = row.length - x - 1
        }
      }

      //up
      for(let i = y - 1; i >= 0; i--){
        if(values[i][x] && parseInt(values[i][x]) >= row[x]){
          up = y - i
          break
        } else {
          up = y 
        }
      }

      //down
      for(let i = y + 1; i < values.length; i++){
        if(values[i][x] && parseInt(values[i][x]) >= row[x]){
          down = i - y
          break
        } else {
          down = values.length - y - 1
        }
      }

      const scenicScore = left * right * up * down

      if(scenicScore > maxScore){
        maxScore = scenicScore
      }
  }
}

console.log(`Maximum possible scenic score: ${maxScore}`)
