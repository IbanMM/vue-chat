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

        this.users;

        fs.readFile('data/users.json', 'utf8', (err, data) => {

            if (err) throw err;

            this.users = JSON.parse(data);

        });

    }

    /**
     * Return the user
     * @param key String
     */

    getUser(key) {

        return this.users[key];

    }

}

module.exports = Users;