<template>
    <div>
        <section class="styx-chat__users">
            <ul>
                <li v-for="(user,index) in users" :key="index">
                    <span>{{user.name}}</span>
                </li>
            </ul>
        </section>
        <section class="styx-chat">

            <section class="styx-chat__timeline">

                <div class="styx-chat__line styx-chat__line__own" >

                    <p class="styx-chat__line__text">este es un texto</p>

                    <time class="styx-chat__line__time" datetime="2008-02-14 20:00">09:00</time>

                </div>

                <div class="styx-chat__line styx-chat__line__other" >

                    <p>este es un texto</p>

                    <time datetime="2008-02-14 20:00">09:00</time>

                </div>

            </section>

            <section class="styx-chat__form">

                <div class="styx-chat__form__inputgroup">

                    <input type="text" class="styx-chat__form__input">

                    <button type="submit" class="styx-chat__form__submit"></button>

                </div>

            </section>

        </section>

    </div>
    
</template>

<script>

    import { mapGetters } from 'vuex'
    import Chat from '@/libraries/Chat'

    export default {

        data () {

            return {

                chat: new Chat('localhost','3006'),

            }

        },

        computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters({
            users: 'getUsers'
        // ...
        })
    }
        
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/styx-chat.scss';
</style>