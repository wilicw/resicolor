<template>
  <div id="timeing">
    <el-main>
      <div v-if="(!isstart)&&(!end)">
        <h2>Timeing Mode</h2>
        <el-input-number size="medium" @change="timechange" :min="10" :max="600" v-model="time"></el-input-number>
        <br>
        <br>
        <el-button type="success" @click="timer" round>Start</el-button>
      </div>
      <h1 v-if="isstart">{{ time }}</h1>
      <Resistor v-if="isstart"/>
      <div v-if="end" class="text item">
        <el-rate
          v-model="rate"
          disabled
          v-if="end"
          show-score
          text-color="#ff9900">
        </el-rate>
        <br>
        Total: {{$store.state.total}} <br><br>
        Avg: {{($store.state.total === 0) ? 0 : (Math.round((avgtime/$store.state.total) * 10) / 10 + 's/one resistor')}} <br><br>
        <el-button @click="tryagain" round>Try again</el-button>
      </div>
    </el-main>
    <el-footer>
      <KeyBoard v-if="isstart"/>
    </el-footer>
  </div>
</template>

<script>
import KeyBoard from '@/components/KeyBoard.vue'
import Resistor from '@/components/Resistor.vue'

export default {
  name: 'app',
  data () {
    return {
      time: 60,
      avgtime: 60,
      isstart: false,
      end: false,
      rate: 5
    }
  },
  components: {
    KeyBoard,
    Resistor
  },
  methods: {
    tryagain: function () {
      this.$store.commit('returnTotal')
      this.time = this.avgtime
      this.isstart = false
      this.end = false
    },
    timer: async function () {
      this.isstart = true
      console.log(this.time)
      if (this.time > 0) {
        await setTimeout(() => {
          this.time--
          this.timer()
        }, 1000)
      } else {
        this.timeend()
      }
    },
    timeend: function () {
      this.isstart = false
      this.end = true
      let rate = 0
      let total = this.$store.state.total
      let avgtime = this.avgtime
      let avg = (total === 0) ? 0 : (avgtime / total)
      if (avg < 3) {
        rate = 5
      } else if (avg < 5) {
        rate = 4.5
      } else if (avg < 6) {
        rate = 4.2
      } else if (avg < 8) {
        rate = 4
      } else if (avg < 10) {
        rate = 3
      } else if (avg < 20) {
        rate = 2
      } else if (avg < 30 || avg === 0) {
        rate = 0
      }
      this.rate = rate
    },
    timechange: function (value) {
      this.avgtime = value
      console.log(value)
    }
  }
}
</script>

<style lang="scss">

</style>
