<template>

    <div class="styx-chat__layout">

    <div class="styx-chat__header"></div>

        <section class="styx-chat__users">

            <ul>

                <li v-for="(user,index) in users" :key="index">

                    <span>{{user.name}}</span>

                </li>
                
            </ul>

        </section>

        <section class="styx-chat">

            <section ref="timelinescroll" class="styx-chat__timeline__wrapper">

                <section class="styx-chat__timeline">

                    <ChatMessage v-for="(message,index) in messages" :key="index"
                        :id="message.index"
                        :user="message.user"
                        :date="message.date"
                        :text="message.text"
                        :state="message.state"
                        @scrollToBottom="scrollToBottom"
                    />

                    <!--
                    <div class="styx-chat__line styx-chat__line__own" >

                        <div class="styx-chat__line__user">Iban</div>

                        <p class="styx-chat__line__text">este es un texto</p>

                        <time class="styx-chat__line__time" datetime="2008-02-14 20:00">09:00</time>

                    </div>

                    <div class="styx-chat__line styx-chat__line__other" >

                        <p>este es un texto</p>

                        <time datetime="2008-02-14 20:00">09:00</time>

                    </div>
                    -->

                </section>

            </section>

            <section class="styx-chat__form">

                <form class="styx-chat__form__inputgroup" @submit.prevent="newMessage">

                    <input type="text" v-model="message" class="styx-chat__form__input">

                    <button type="submit" class="styx-chat__form__submit"></button>

                </form>

            </section>

        </section>

        <div class="styx-chat__footer"></div>

    </div>
    
</template>

<script>

    import { mapGetters } from 'vuex'
    import Chat from '@/libraries/Chat'
    import ChatMessage from '@/components/ChatMessage'

    export default {

        data () {

            return {

                chat: new Chat('localhost','3006'),
                message: '',
                messages_render: null

            }

        },

        components: {

            ChatMessage

        },

        methods: {

            newMessage() {

                if(this.message !== '') {

                    this.chat.emitNewMessage(this.message)

                    this.message = ''

                }

            },

            scrollToBottom() {

                let timeline = this.$refs.timelinescroll

                timeline.scrollTop = timeline.scrollHeight

            }

        },

        computed: {

            ...mapGetters({
                users: 'getUsers',
                messages: 'getMessages'
            })

        },

        created() {

            this.messages_render = this.messages.reverse()

        }
        
    }

</script>

<style lang="scss">
    @import '@/assets/scss/styx-layout.scss';
    @import '@/assets/scss/styx-chat.scss';
    @import '@/assets/scss/styx-users.scss';
</style>