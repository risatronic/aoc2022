function setUpStacks(crates){
  const processedStacks = {}

  crates.forEach(stack => {
    for(let i = 0; i < stack.length; i += 4){
      if(stack[i] === '['){
        const stackToAddTo = crates[crates.length - 1][i + 1]

        if(!processedStacks[stackToAddTo]){
          processedStacks[stackToAddTo] = []
        }

        processedStacks[stackToAddTo].unshift(stack[i + 1])
      }
    }
  })

  return processedStacks
}

module.exports = {
  setUpStacks
}
