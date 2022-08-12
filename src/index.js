module.exports = function check(str, bracketsConfig) {
  let bracketsPairs = {}
  bracketsConfig.forEach(el => {
    bracketsPairs[el[1]]=el[0];
  })
  let stack = [];
  for (let i=0; i<str.length; i++) {
    let currentBracket = str[i];
    let topElement = stack[stack.length - 1];
    if (bracketsPairs[currentBracket] === topElement && stack.length !== 0){
      stack.pop();
    } else {
      stack.push(currentBracket);
    }
  }
  return stack.length === 0;
}


  
  
    






  