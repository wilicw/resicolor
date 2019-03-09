<template>
  <div id="app">
    <el-container>
      <el-header height="45px">
        <el-row :gutter="20">
          <el-col :span="20">
            <div style="text-align:left;">
              <h2>Resistors Color</h2>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align:right;">
              <a class="menu" href="#"><h1 @click="menushow = true"><i class="el-icon-menu"></i></h1></a>
            </div>
          </el-col>
        </el-row>

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
        <p class="copyright">This project is <a class="menu" href="https://choosealicense.com/licenses/mit/">MIT Licensed</a> // Source Code on <a class="menu" href="https://github.com/wilicw/resicolor">Github</a><br><br>© 2019 ResiColor</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import func from './func'
export default {
  name: 'app',
  data () {
    return {
      menushow: false
    }
  },
  created: function () {
    this.$store.commit('loadsetting')
    func.genv1tov2()
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
  font-size: 10pt;
  color: #8f9398;
}

.footer {
  vertical-align: bottom;
  bottom: 15px;
}
</style>
