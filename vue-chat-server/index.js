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
const http = require('http')
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyparser = require('body-parser')
const Users = require('./controllers/users.controller.js')
const app = express()

const us = new Users()

// -------------------------------------------------------------
// Simple api endpoint for fake login users
// -------------------------------------------------------------
app.use(cors())

app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json())

app.post('/user', (req, res) => {

  let user = req.body.user
  
  let user_db = us.getUser(user.name)

  if(typeof user_db !== 'undefined') {

    let user_res = {

      name: user.name,
      avatar: user_db.avatar

    }

    if(user_db.password === user.password) {

      res.json({
        user: user_res
      })

    } else {

      res.json({
        data: ''
      })

    }

  }

});

// -------------------------------------------------------------
// Send to the Vue front all GET requests
// -------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, '../vue-chat-front/dist/')))

app.get('*', (req, res) => {

  res.sendFile(path.resolve(__dirname, '../vue-chat-front/dist/', './index.html'))

});

// -------------------------------------------------------------
// Socket.IO - Set up
// -------------------------------------------------------------
const server = http.createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {

  console.log(socket.id);

    io.emit('user-setup', {
        name: 'user',
        message: 'ok',
        date: ''
    });

    /**
     * New message from a user
     * @param message Object
     */
    
    socket.on('sendNewMessage', (message) => {
        console.log(socket.id);
        // Broadcast message to all users
        io.emit('getNewMessage', message)

    })

    /**
     * Client disconnect
     * @param message Object
     */
    socket.on('disconnect', () => {

      console.log('down');

    })
    
})



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

    console.log('Server app listening on port 3006!')

});