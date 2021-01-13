//play.js
const connect  = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  // stdin.resume();
  
  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') { // \u0003 this is ctrl + c
      process.exit();
    };
  })
  return stdin;
}

setupInput();

console.log('Connecting ...');
connect();