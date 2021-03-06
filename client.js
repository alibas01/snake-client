const net = require("net");
const { IP, PORT } = require("./constants");
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection(
    {
      host: IP,
      port: PORT,
    },
    () => {
      console.log("Successfully connected to game server");
      console.log("Please use 'w' 'a' 's' 'd' butons to direct.");
      conn.write("Name: ALB");
    }
  );
  conn.setEncoding("utf8");
  // conn.on('connect', () => {
  //   conn.write("Say: What the heck!!")
  // });

  setTimeout(() => {
    process.stdout.write("\x07");
  }, 50);

  //if receive a data from server, show it!
  conn.on("data", (data) => {
    console.log(data);
  });
  // if connection ends, show it
  conn.on("end", () => {
    console.log("disconnected from server");
  });
  return conn;
};

module.exports = { connect };
