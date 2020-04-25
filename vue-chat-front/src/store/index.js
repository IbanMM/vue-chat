import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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

            state.users.push(user)

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

            console.log('menssage to vuex')
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

        users: moduleUsers,
        messages: moduleMessages

    }

})

export default store