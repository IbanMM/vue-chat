<template>

    <div>

        <form action="" @submit.prevent="sendUser">

            <input v-model="user.name" type="text">

            <input v-model="user.password" type="password">

            <button type="submit">Enviar</button>

        </form>

    </div>

</template>

<script>

    import axios from 'axios'

    export default {
        
        data() {

            return {

                user: {
                    name: '',
                    password: ''
                }
                
            }

        },

        methods: {

            sendUser() {

                //console.log(this.$axios);

                axios.post(`${process.env.VUE_APP_API_URL}user`,{
                    user: this.user
                })
                .then((res, error) => {

                    if(error) {
                        
                        console.log(error)

                    }

                    if(res.status == 200) {
                        this.$router.push({name:'Chat'})
                    }

                })

            }

        }

    }

</script>

<style lang="scss">

</style>