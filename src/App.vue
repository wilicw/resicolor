<template>
  <div id="app">
    <el-container>
      <el-header>
        <a class="menu" href="#"><h1 @click="menushow = true">Resistor Color</h1></a>
      </el-header>
      <br>
      <el-dialog title="menu" :visible.sync="menushow">
        <div @click="mode('normal')"><a class="menu" href="#">Normal mode</a></div>
        <br>
        <div @click="mode('timeing')"><a class="menu" href="#">Timeing mode</a></div>
      </el-dialog>
      <el-main>
        <Resistor/>
      </el-main>
      <el-footer>
        <KeyBoard/>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
import KeyBoard from './components/KeyBoard.vue'
import Resistor from './components/Resistor.vue'

export default {
  name: 'app',
  data () {
    return {
      menushow: false
    }
  },
  components: {
    KeyBoard,
    Resistor
  },
  methods: {
    mode: function (mode) {
      console.log(mode)
    }
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
  margin-top: 50px;
}

.menu {
  color: #2c3e50;
  text-decoration:none;
}
</style>
