let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  // stdin.resume();
  
  //send commands to server
  stdin.on('data', (input) => {
    if (input === "w") {
      console.log('up')
      connection.write("Move: up");
    };
    if (input === "a") {
      console.log('left')
      connection.write("Move: left");
    };
    if (input === "d") {
      console.log('right')
      connection.write("Move: right");
    };
    if (input === "s") {
      console.log('down')
      connection.write("Move: down");
    };
  });
  
  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') { // \u0003 this is ctrl + c
      console.log('Session terminated by the user');
      process.exit();
      
    };
  })
  return stdin;
}

module.exports = {setupInput}
