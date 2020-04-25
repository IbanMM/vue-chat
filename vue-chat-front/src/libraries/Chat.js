/**                  
 *  _____    _____ ___________ _______  ____  
 *  \__  \  /     \\____ \__  \\_  __ \/  _ \ 
 *   / __ \|  Y Y  \  |_> > __ \|  | \(  <_> )
 *  (____  /__|_|  /   __(____  /__|   \____/ 
 *       \/      \/|__|       \/              
 * 
 * Class for chat functionality
 * Uses https://socket.io/
 *
 */

import io from 'socket.io-client'
import Sound from '@/libraries/Sound'
import store from '@/store'

class Chat {

    constructor(url, port) {

        this.audio = new Sound

        this.vuex = store

        this.socket = io.connect( `http://${url}:${port}` )

        this.emitNewConnection()

        this.socket.on('user-setup', (user) => {

            console.log(user);
            this.vuex.commit('SET_USER',user)
            this.audio.playNotification()
            
        });

        this.socket.on('getNewMessage', (message) => {

            this.getNewMessage(message);
            
        });

    }

    /**
     * When a new connection is created
     */

    emitNewConnection() {

        this.socket.emit('connection', () => {})

    }

    /**
     * New message from server
     * @param message Object
     */

    getNewMessage(message) {

        this.audio.playNotification()
        this.vuex.commit('SET_MESSAGE', message)

    }
    

    /**
     * New message to the server
     * @param text String
     */

    emitNewMessage(text) {

        let id = this.createID()

        let date = new Date(id)
        let hours = date.getHours()
        let minutes = date.getMinutes()

        let message = {
            id: id,
            user: '',
            text: text,
            date: `${hours}:${minutes}`,
            state: 'send'
        }

        this.socket.emit('sendNewMessage', message)

    }

    /**
     * Return a timestamp to use as id
     * @param message Object
     */

    createID() {

        let id =  new Date().getTime()

        return id

    }

}

export default Chat