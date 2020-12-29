<template>
  <div class="flex justify-center">
    <img  alt="Vue logo" src="./assets/logo.png">
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import store from "./store/index.ts"
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    store.getRunData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
