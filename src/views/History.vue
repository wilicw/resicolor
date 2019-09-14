<template>
  <div id="home">
    <el-main>
      <h2>History</h2>
      <h4>Only show recent data</h4>
      <div v-for="i in data" :key="i.ans" class="text item">
        <el-card class="box-card">
          <svg v-if="i.band4clr===undefined" width="200" height="60">
            <rect x="50" y="20" rx="10" ry="10" width="100" height="30" style="fill:#edde91;opacity:0.8"/>
            <rect x="20" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
            <rect x="150" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
            <rect x="65" y="20" width="8" height="30" :style="`fill:${i.band0clr};`"/>
            <rect x="80" y="20" width="8" height="30" :style="`fill:${i.band1clr};`"/>
            <rect x="95" y="20" width="8" height="30" :style="`fill:${i.band2clr};`"/>
            <rect x="120" y="20" width="8" height="30" :style="`fill:${i.band3clr};`"/>
          </svg>
          <svg v-if="i.band4clr!==undefined" width="200" height="60">
            <rect x="50" y="20" rx="10" ry="10" width="100" height="30" style="fill:#8ad8ff;opacity:0.8"/>
            <rect x="20" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
            <rect x="150" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
            <rect x="65" y="20" width="5" height="30" :style="`fill:${i.band0clr};`"/>
            <rect x="75" y="20" width="5" height="30" :style="`fill:${i.band1clr};`"/>
            <rect x="85" y="20" width="5" height="30" :style="`fill:${i.band2clr};`"/>
            <rect x="95" y="20" width="5" height="30" :style="`fill:${i.band3clr};`"/>
            <rect x="120" y="20" width="5" height="30" :style="`fill:${i.band4clr};`"/>
          </svg>
          <br>
          {{i.ans}}
        </el-card>
        <br>
      </div>
    </el-main>
  </div>
</template>

<script>
import func from '../func'
export default {
  name: 'app',
  data () {
    return {
      data: null
    }
  },
  created () {
    this.history()
  },
  methods: {
    history: function () {
      let data = func.readhistory()
      this.data = data
    }
  }
}
</script>

<style scoped>
.clean {
  text-decoration:none;
  color: #8f9398;
}
</style>
