/**                  
 *  _____    _____ ___________ _______  ____  
 *  \__  \  /     \\____ \__  \\_  __ \/  _ \ 
 *   / __ \|  Y Y  \  |_> > __ \|  | \(  <_> )
 *  (____  /__|_|  /   __(____  /__|   \____/ 
 *       \/      \/|__|       \/              
 * 
 * Simple server for demonstration pourposes only, this is not for a production enviroment.
 *
 */
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

// ------------------------------------------------------------
// Send to the Vue front all requests
// -------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, '../vue-chat-front/dist/')));

app.get('*', (req, res) => {

  res.sendFile(path.resolve(__dirname, '../vue-chat-front/dist/', './index.html'));

});

// ------------------------------------------------------------
// Socket.IO - Set up
// -------------------------------------------------------------
const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {

    console.log('a user connected');

    io.emit('user-setup', {
      name: 'user',
      message: 'ok',
      date: ''
    });
    
});

  /*
  
  io.on('connection', client => {
  
    const stream = ss.createStream();
  
    client.on('track', () => {
      const filePath = path.resolve(__dirname, './music', './test.mp3');
      const stat = fileSystem.statSync(filePath);
      const readStream = fileSystem.createReadStream(filePath);
      // pipe stream with response stream
      readStream.pipe(stream);
  
      ss(client).emit('track-stream', stream, { stat });
    });
    client.on('disconnect', () => {});
  });
  */
  
server.listen(process.env.PORT || '3006', function () {

    console.log('Server app listening on port 3006!');

});