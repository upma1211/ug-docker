const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Event handler for WebSocket connection
wss.on('connection', function connection(ws) {
  console.log('WebSocket connection established');

  // Event handler for WebSocket message received
  ws.on('message', function incoming(message) {
    console.log('Message from client: ', message);

    // Send a response back to the client
    ws.send('Hello Client!');
  });

  // Event handler for WebSocket connection close
  ws.on('close', function close() {
    console.log('WebSocket connection closed');
  });
});

