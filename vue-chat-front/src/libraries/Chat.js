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

        this.url = url

        this.port = port

        this.socket

        this.connect()

    }

    /**
     * Open connection to the server
     * @param user Object
     */
    connect(){

        let user = this.vuex.getters.getLoginUser
        let user_name = user.name
        
        this.socket = io.connect( `http://${this.url}:${this.port}`,{ query: `user=${user_name}` } )

        this.socket.on('getUsersOnline', (data) => {

            this.setListOfUsers(data.users)
            
        });

        this.socket.on('getUsersOnline', (data) => {

            this.setListOfUsers(data.users)
            
        });

        this.socket.on('getUserOffline', (data) => {

            this.setUserOffline(data.socket)
            
        });

        this.socket.on('getNewMessage', (message) => {

            this.getNewMessage(message);
            
        });
        

    }

    /**
     * Create list of users
     * @param users Array
     */
    setListOfUsers(users) {

        users.forEach(user => {

            this.vuex.commit('SET_USER', user)

        })

    }

    /**
     * Remove user online
     * @param socket String
     */
    setUserOffline(socket) {

        this.vuex.commit('REMOVE_USER', socket)

    }

    /**
     * When a new connection is created
     * @param user Object
     */

    emitNewConnection() {

        let user = this.vuex.getters.getLoginUser
        console.log(user)
        this.socket.emit('connection', user)

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

    emitNewMessage(text,socket) {

        let id = this.createID()

        let date = new Date(id)
        let hours = date.getHours()
        let minutes = date.getMinutes()

        let message = {
            id: id,
            socket: socket,
            text: text,
            date: `${hours}:${minutes}`,
            state: 'send',
            own: false
        }

        this.socket.emit('sendNewMessage', message)

        message.own = true
        
        this.vuex.commit('SET_MESSAGE', message)

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