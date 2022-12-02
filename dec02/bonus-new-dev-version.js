fs = require('fs')
var1 = fs.readFileSync('./input.txt', 'utf-8')
var2 = 0
var1.substring(0, var1.lastIndexOf('\n')).split('\n').forEach(x => {var2 += x[0] === 'A' ? (x[2] === 'X' ? 3 : ((x[2] === 'Y' ? 4  : 8))) : ((x[0] === 'B' ? (x[2] === 'X' ? 1 : (x[2] === 'Y' ? 5 : 9)) : ( x[2] === 'X' ? 2 : (x[2] === 'Y' ? 6 : 7))))})
console.log(var2)