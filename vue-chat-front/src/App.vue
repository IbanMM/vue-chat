<template>

    <div id="app" >

        <ChatHeader />

        <router-view/>

        <div class="styx-chat__footer">

            <p>Anno Domini 2020</p>

        </div>
        
    </div>

</template>

<script>

    import ChatHeader from '@/components/ChatHeader'

    export default {
        
        components: {

            ChatHeader

        }

    }

</script>

<style lang="scss">
    @import '@/assets/scss/styx-layout.scss';
    @import '@/assets/scss/styx-chat.scss';
    @import '@/assets/scss/styx-users.scss';
    @import '@/assets/scss/styx-login.scss';
    @import '@/assets/scss/styx-who.scss';
</style>