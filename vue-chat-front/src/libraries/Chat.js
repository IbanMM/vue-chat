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

        /*
        console.log(store)

        this.vuex.commit('SET_USER','giban')
        */

        this.socket = io.connect(`http://${url}:${port}`)

        this.socket.on('user-setup', (user) => {

            console.log(user);
            this.vuex.commit('SET_USER',user)
            this.audio.playNotification()
            
        });

        this.emitNewConnection()


    }

    /**
     * When a new connection is created
     */

    emitNewConnection() {

        this.socket.emit('connection', () => {})

    }

}

export default Chat