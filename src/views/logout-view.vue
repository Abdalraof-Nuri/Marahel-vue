<template>
  <div v-if="!store.getters.getLogOutMessage">Please Wait While being loged Out...</div>
  <div v-else>{{ store.getters.getLogOutMessage }}</div>
</template>

<script>
import { useStore } from "vuex";

export default ({
    data(){
        return{
            store: useStore(),
        }
    },
    mounted() {

        this.store.dispatch('logOut')
        //this.$router.push('logIn')
    },
})
</script>

<style>

</style>
