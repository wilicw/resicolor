<template>
  <div class="resistor">
    <el-row>
      <el-col>
        <h3>Total: {{this.$store.state.total}}</h3>
        <div @click="show()">
          <svg width="200" height="60">
            <rect x="50" y="20" rx="10" ry="10" width="100" height="30" style="fill:#edde91;opacity:0.8"/>
            <rect x="20" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
            <rect x="150" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
            <rect x="65" y="20" width="8" height="30" :style="'fill:'+this.$store.state.band0clr+';'"/>
            <rect x="80" y="20" width="8" height="30" :style="'fill:'+this.$store.state.band1clr+';'"/>
            <rect x="95" y="20" width="8" height="30" :style="'fill:'+this.$store.state.band2clr+';'"/>
            <rect x="120" y="20" width="8" height="30" :style="'fill:'+this.$store.state.band3clr+';'"/>
          </svg>
          <h1>{{this.$store.state.input}}</h1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Resistor',
  data () {
    return {
    }
  },
  methods: {
    show: function () {
      alert(this.$store.state.ans)
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
