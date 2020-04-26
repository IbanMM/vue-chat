import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ----------------------------------------------------------
// Vuex module for Login
// ----------------------------------------------------------
const moduleLogin = {

    state: {
        
        login: false,
        user: null
  
    },
  
  
    mutations: {
  
        /** 
         * Add a user to the state
         * 
         * @param state
         * @param user
         * 
         */

        SET_LOGIN_USER( state, user ) {

            state.user = user
            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(user))

        },

        /** 
         * Set login
         * 
         * @param state
         * @param login Boolean
         * 
         */

        SET_LOGIN( state, login ) {

            state.login = login

        }
  
    },
  
    getters: {
  
        /** 
         * Return the current users
         * 
         * @param state
         * 
         */

        getLoginUser: state => {

            return state.user

        },

        /** 
         * Return the current users
         * 
         * @param state
         * 
         */

        getLogin: state => {

            return state.login

        }
  
    }
  
}

// ----------------------------------------------------------
// Vuex module for Users
// ----------------------------------------------------------
const moduleUsers = {

  state: {

      users: []

  },


    mutations: {

        /** 
         * Add a user to the state
         * 
         * @param state
         * @param user
         * 
         */

        SET_USER( state, user ) {

            let online = state.users.find(u => u.socket === user.socket)

            if(typeof online === 'undefined') {

                state.users.push(user)

            }

        },

        /** 
         * Remove a user
         *
         * @param socket
         * 
         */

        REMOVE_USER( state, socket ) {

            let user_object = state.users.find(user => user.socket === socket)
            let user_index = state.users.indexOf(user_object)

            state.users.splice(user_index, 1)

        }

    },

    getters: {

        /** 
         * Return the current users
         * 
         * @param state
         * 
         */

        getUsers: state => {

            return state.users

        },
        
        /** 
         * Get user by name
         * 
         * @param user Object
         * 
         */

        getUser: (state) => (user) => {

            let user_object = state.users.find(u => u.name === user.name)

            if(typeof user_object !== 'undefined') {

                return user_object

            }

        },

        /** 
         * Get user by socket
         * 
         * @param socket String
         * 
         */

        getUserBySocket: (state) => (socket) => {

            let user_object = state.users.find(u => u.socket === socket)

            if(typeof user_object !== 'undefined') {

                return user_object

            }

        }

    }

}

// ----------------------------------------------------------
// Vuex module for Messages
// ----------------------------------------------------------
const moduleMessages = {

    state: {
  
        messages: []
  
    },
  
  
      mutations: {
  
        /** 
         * Add a message to the state
         * 
         * @param state
         * @param message
         * 
         */
  
        SET_MESSAGE( state, messages) {

            state.messages.push(messages)

        }
  
      },
  
      getters: {
  
        /** 
         * Return the current messages
         * 
         * @param state
         * 
         */
  
        getMessages: state => {

            return state.messages

        }
  
    }
  
}

// ----------------------------------------------------------
// Vuex modules
// ----------------------------------------------------------
const store =  new Vuex.Store({

    modules: {

        login: moduleLogin,
        users: moduleUsers,
        messages: moduleMessages

    }

})

export default store