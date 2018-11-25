<template>
  <div id="app">
    <HomePage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HomePage from './components/Home.vue'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
