const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter something: ', (str) => {
  const stack = []
  for(let i=0;i<str.length;i++){
    stack.push(str[i])
  }
  let result = ""
  for(let i=0;i<str.length;i++){
    result+=stack.pop()
  }
  console.log("Reversed string is "+ result)
  rl.close();
});
