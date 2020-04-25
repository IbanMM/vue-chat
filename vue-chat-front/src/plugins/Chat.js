/**                  
 *  _____    _____ ___________ _______  ____  
 *  \__  \  /     \\____ \__  \\_  __ \/  _ \ 
 *   / __ \|  Y Y  \  |_> > __ \|  | \(  <_> )
 *  (____  /__|_|  /   __(____  /__|   \____/ 
 *       \/      \/|__|       \/              
 * 
 * Vue plugin
 * Uses https://socket.io/
 *
 */
import io from 'socket.io-client'

function install(Vue) {

    Vue.prototype.$chatConection = function (url,port) {

        io.connect('http://localhost:3006')

    }

    Vue.prototype.$chatMessage = function (methodOptions) {
        console.log('bum bum'+methodOptions);
    }

}

export default install