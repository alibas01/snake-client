const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: "localhost",
    port: 50541
  }, () => {
    console.log("Successfully connected to game server"  );
    console.log("Please use 'w' 'a' 's' 'd' butons to direct."  );
    conn.write("Name: ALB");
  });
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  conn.setEncoding('utf8'); 

  //send commands to server
  stdin.on('data', (input) => {
    if (input === "w") {
      conn.write("Move: up");
    };
    if (input === "a") {
      conn.write("Move: left");
    };
    if (input === "d") {
      conn.write("Move: right");
    };
    if (input === "s") {
      conn.write("Move: down");
    };
    
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 50);
    
  })

  //if receive a data from server, show it!
  conn.on('data', (data) => {
    console.log(data);
  })
  // if connection ends, show it
  conn.on('end', () => {
    console.log('disconnected from server');
  });
  return conn;
}

module.exports = {connect} ;