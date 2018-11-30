<template>
  <div id="home">
    <el-main>
      <h2>History</h2>
      <h3>Total: {{total}}</h3>
      <el-card class="box-card">
        <div v-for="i in data" class="text item">
          <svg v-if="!i.is5band" width="200" height="60">
            <rect x="50" y="20" rx="10" ry="10" width="100" height="30" style="fill:#edde91;opacity:0.8"/>
            <rect x="20" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
            <rect x="150" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
            <rect x="65" y="20" width="8" height="30" :style="`fill:${i.band0clr};`"/>
            <rect x="80" y="20" width="8" height="30" :style="`fill:${i.band1clr};`"/>
            <rect x="95" y="20" width="8" height="30" :style="`fill:${i.band2clr};`"/>
            <rect x="120" y="20" width="8" height="30" :style="`fill:${i.band3clr};`"/>
          </svg>
          <svg v-if="i.is5band" width="200" height="60">
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
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      total: 0,
      data: null
    }
  },
  created () {
    this.history()
  },
  methods: {
    history: function () {
      let data = JSON.parse(window.localStorage.getItem('history'))
      this.data = data
      this.total = data.length
    }
  }
}
</script>

<style lang="scss">

</style>
