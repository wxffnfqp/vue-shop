<template>
  <div id="app">
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
    import Footer from "./components/assembly/Footer";
    export default {
      name: 'App',
        data(){
          return{

          }
        },
        components:{
            "v-footer":Footer,
        }
    }
</script>

<style>

</style>
