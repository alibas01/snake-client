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
    conn.write("Name: ALB");
  });
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  conn.setEncoding('utf8'); 

  //send the name to server
  // const initials = 'ALB';
  // stdin.on('data', (input) => {
  //   client.write(`"Name: ${initials}" `);
  // })

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

module.exports = connect ;