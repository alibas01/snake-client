const input = require("./input");
//play.js
const { connect } = require("./client");

console.log("Connecting ...");
let conn = connect();
input.setupInput(conn);
