<template>

    <div class="styx-chat__header">

        <AmparoLogo/>
        <ChatLogged v-if="login" />

    </div>

</template>

<script>

    import ChatLogged from '@/components/ChatLogged'
    import AmparoLogo from '@/assets/svg/amparo.svg'
    import { mapGetters } from 'vuex'

    export default {

        components: {
            AmparoLogo,
            ChatLogged
        },
        
        computed: {

            ...mapGetters({
                login: 'getLogin'
            })

        }

    }

</script>

<style lang="scss" scoped>

</style>