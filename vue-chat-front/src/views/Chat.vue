<template>
    <div>
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

    import Sound from '@/libraries/Sound'

    export default {

        data () {

            return {

                sound: new Sound

            }

        },

        created () {

            this.sound.playNotification()

        }
        
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/styx-chat.scss';
</style>