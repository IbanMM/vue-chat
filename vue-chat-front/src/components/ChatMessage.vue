<template>

    <div class="styx-chat__line styx-chat__line__other" >

        <div class="styx-chat__line__user">{{user}}</div>

        <p class="styx-chat__line__text" v-html="text"></p>

        <time class="styx-chat__line__time" datetime="2008-02-14 20:00">{{date}}</time>

    </div>

</template>

<script>

    export default {
        
        props:[
            'id',
            'user',
            'date',
            'text',
            'state'
        ],

        mounted() {

            this.$nextTick(() => {

                this.$emit('scrollToBottom')

            })

        }

    }

</script>

<style lang="scss" scoped>

</style>