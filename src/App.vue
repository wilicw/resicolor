<template>
  <div id="app">
    <el-container>
      <el-header>
        <a class="menu" href="#"><h1 @click="menushow = true">Resistors Color</h1></a>
      </el-header>
      <el-dialog title="MENU" :visible.sync="menushow">
        <div @click="mode('normal')"><router-link class="menu" to="/">Normal mode</router-link></div>
        <br>
        <div @click="mode('timeing')"><router-link class="menu" to="/timeing">Timeing mode</router-link></div>
        <br>
        <div @click="mode('setting')"><router-link class="menu" to="/setting">Setting</router-link></div>
      </el-dialog>
      <router-view/>
    </el-container>
    <br>
    <br>
    <p class="copyright">© 2018 - <a class="menu" href="https://github.com/wilicw/resicolor">Source Code</a></p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menushow: false
    }
  },
  created: function () {
    this.$store.commit('setopacity')
  },
  methods: {
    mode: function (mode) {
      this.menushow = false
      console.log(mode)
    }
  }
}
</script>

<style lang="scss">
@font-face{
  font-family: AvenirLTStd;
  font-style: normal;
  src: url("AvenirLTStd-Book.otf") format("opentype");
  font-display: swap;
}

#app {
  font-family: 'AvenirLTStd';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.menu {
  color: #2c3e50;
  text-decoration:none;
}

.copyright {
    position: relative;
    bottom: 10px;
    color: #8f9398;
}
</style>
