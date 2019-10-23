const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  
  conn.on('connect', () => {
    conn.write('Name: MCL');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = { connect };