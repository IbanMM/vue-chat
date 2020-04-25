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

        SET_USER(state,user) {

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

const store =  new Vuex.Store({

    modules: {

        users: moduleUsers

    }

})

export default store
