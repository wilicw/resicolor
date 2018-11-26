<template>
  <div class="hello">
    <el-container>
      <el-header>
        <h1 @click="show()">Resistor Color</h1>
      </el-header>
      <br>
      <el-main>
        <el-row>
          <el-col>
            <h3>total: {{total}}</h3>
            <div class="">
              <svg width="200" height="60">
                <rect x="50" y="20" rx="10" ry="10" width="100" height="30" style="fill:#edde91;opacity:0.8"/>
                <rect x="20" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
                <rect x="150" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
                <rect x="65" y="20" width="8" height="30" :style="'fill:'+band0clr+';'"/>
                <rect x="80" y="20" width="8" height="30" :style="'fill:'+band1clr+';'"/>
                <rect x="95" y="20" width="8" height="30" :style="'fill:'+band2clr+';'"/>
                <rect x="120" y="20" width="8" height="30" :style="'fill:'+band3clr+';'"/>
              </svg>
            </div>
          </el-col>
        </el-row>
        <h1>{{msg}}</h1>
      </el-main>
      <el-footer>
        <el-row :gutter="20">
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('7')">7</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('8')">8</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('9')">9</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('back')">DEL</el-button></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('4')">4</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('5')">5</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('6')">6</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('M')">M</el-button></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('1')">1</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('2')">2</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('3')">3</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('K')">K</el-button></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><div><el-button type="info" round @click="genres()"><i class="el-icon-refresh"></i></el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('0')">0</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('.')">.</el-button></div></el-col>
          <el-col :span="6"><div><el-button type="info" round @click="inputtext('±')">±</el-button></div></el-col>
        </el-row>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '______',
      res: '',
      band0clr: '',
      band1clr: '',
      band2clr: '',
      band3clr: '',
      total: 0
    }
  },
  created: function () {
    this.genres()
  },
  methods: {
    open: function () {
      this.$message({
        message: 'Correct!',
        type: 'success'
      })
      this.genres()
    },
    inputtext: function (text) {
      if (this.msg == '______') {
        this.msg = ''
      }
      if (text === 'back') {
        this.msg = this.msg.substring(0, this.msg.length - 1)
        if (this.msg.length == 0) {
          this.msg = '______'
        }
      } else {
        this.msg += text
      }
      if (this.msg == this.res) {
        this.msg = '______'
        this.total++
        this.open()
      }
    },
    show: function() {
      alert(this.res)
    },
    genres: function () {
      let band0 = Math.floor((Math.random() * 10)) + 1
      let band1 = Math.floor((Math.random() * 10))
      let band2 = Math.floor((Math.random() * 10)) % 7
      let band3 = (Math.floor(Math.random() * 100) + 1) % 2
      let res = (band0 * 10 + band1) * Math.pow(10, band2)
      let str = ''
      console.log(band0)
      if (res >= 1000000) {
        str = res / 1000000 + 'M'
      } else if (res >= 1000) {
        str = res / 1000 + 'K'
      } else {
        str = res.toString()
      }
      if (band3 === 0) {
        str += '±10'
      }
      this.res = str
      this.band0clr = this.clr(band0)
      this.band1clr = this.clr(band1)
      this.band2clr = this.clr(band2)
      this.band3clr = this.clr(band3 + 20)
      console.log(str)
    },
    clr: function (band) {
      switch (band) {
        case 0:
          return '#000000'
        case 1:
          return '#964B00'
        case 2:
          return '#FF0000'
        case 3:
          return '#ffa500'
        case 4:
          return '#fff600'
        case 5:
          return '#9acd32'
        case 6:
          return '#6495ed'
        case 7:
          return '#9400d3'
        case 8:
          return '#a0a0a0'
        case 9:
          return '#FFFFFF'
        case 20:
          return '#c0c0c0'
        case 21:
          return '#cfb53b'
        default:
      }
    }
  }
}
</script>

<style scoped>
 .el-row {
   margin-bottom: 20px;
   &:last-child {
     margin-bottom: 0;
   }
 }
 .el-col {
   border-radius: 4px;
 }
 .grid-content {
   border-radius: 4px;
   min-height: 36px;
 }
 .row-bg {
   padding: 10px 0;
   background-color: #f9fafc;
 }
</style>
