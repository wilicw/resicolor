<template>
  <div class="keyboard">
    <el-row :gutter="20">
      <el-col :span="6"><div><el-button type="info" @click="inputtext('7')">7</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('8')">8</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('9')">9</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('back')">DEL</el-button></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div><el-button type="info" @click="inputtext('4')">4</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('5')">5</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('6')">6</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('M')">M</el-button></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div><el-button type="info" @click="inputtext('1')">1</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('2')">2</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('3')">3</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('K')">K</el-button></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div><el-button type="info" @click="genres()"><i class="el-icon-refresh"></i></el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('0')">0</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('.')">.</el-button></div></el-col>
      <el-col :span="6"><div><el-button type="info" @click="inputtext('±')">±</el-button></div></el-col>
    </el-row>
  </div>
</template>

<script>
import func from '../func'
export default {
  name: 'KeyBoard',
  data () {
    return {
    }
  },
  created: function () {
    func.genResistor()
  },
  methods: {
    genres: function () {
      func.genResistor()
    },
    inputtext: function (text) {
      this.$store.commit('inputtext', text)
    }
  }
}
</script>

<style scoped>
 .el-row {
   margin-bottom: 20px;
 }
</style>
