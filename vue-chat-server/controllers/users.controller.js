/**                  
 *  _____    _____ ___________ _______  ____  
 *  \__  \  /     \\____ \__  \\_  __ \/  _ \ 
 *   / __ \|  Y Y  \  |_> > __ \|  | \(  <_> )
 *  (____  /__|_|  /   __(____  /__|   \____/ 
 *       \/      \/|__|       \/              
 * 
 * Simple class to handle users.
 * Demonstration pourposes only, this is not for a production enviroment.
 *
 */
const fs = require('fs');

class Users {

    constructor() {

        this.users
        this.users_online = []

        fs.readFile('data/users.json', 'utf8', (err, data) => {

            if (err) throw err

            this.users = JSON.parse(data)

        });

    }

    /**
     * Return the user
     * @param key String
     */

    getUser(key) {

        return this.users[key]

    }

    /**
     * Add user to the users online
     * @param key String
     * @param socket String
     */

    setUserOnline(key,socket) {

        // Check if the user is already online
        let online = this.users_online.find(user => user.socket === socket)
        let user_name = this.users_online.find(user => user.name === key)

        if(typeof online === 'undefined' && typeof user_name === 'undefined') {

            let user = this.getUser(key)
            let user_online = {}

            user_online.name = key
            user_online.socket = socket
            user_online.avatar = user.avatar

            this.users_online.push(user_online)

        }

    }

    /**
     * Set user offline
     * @param socket String
     */
    
    setUserOffline(socket) {

        let user_object = this.users_online.find(user => user.socket === socket)
        let user_index = this.users_online.indexOf(user_object)

        if(typeof user_object !== 'undefined' && user_index != -1) {

            this.users_online.splice(user_index, 1)

        }

        console.log('users online')
        console.log(this.users_online)
    }

    /**
     * Return the users online
     */

    getUsersOnline() {

        return this.users_online

    }

}

module.exports = Users;