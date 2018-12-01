<template>
  <div id="app">
    <el-container>
      <el-header height="45px">
        <a class="menu" href="#"><h1 @click="menushow = true">Resistors Color</h1></a>
      </el-header>
      <el-dialog title="MENU" :visible.sync="menushow">
        <div @click="mode('normal')"><router-link class="menu" to="/resicolor/">Normal mode</router-link></div>
        <br>
        <div @click="mode('timeing')"><router-link class="menu" to="/resicolor/timeing">Timeing mode</router-link></div>
        <br>
        <div @click="mode('history')"><router-link class="menu" to="/resicolor/history">History</router-link></div>
        <br>
        <div @click="mode('setting')"><router-link class="menu" to="/resicolor/setting">Setting</router-link></div>
      </el-dialog>
      <router-view/>
      <el-footer class="footer">
        <p class="copyright">© 2018 ResiColor - <a class="menu" href="https://github.com/wilicw/resicolor">Source Code</a> on Github. <a class="menu" href="https://opensource.org/licenses/MIT">MIT License.</a></p>
      </el-footer>
    </el-container>
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
    this.$store.commit('loadsetting')
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
$black: #2c3e50;
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
  color: $black;
  margin-top: 20px;
}

.menu {
  color: $black;
  text-decoration:none;
}

.copyright {
  position: relative;
  bottom: 0px;
  color: #8f9398;
}

.footer {
  vertical-align: bottom;
  bottom: 15px;
}
</style>
