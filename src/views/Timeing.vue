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
        Total: {{$store.state.total}} <br><br>
        Avg: {{($store.state.total === 0) ? 0 : (Math.round((avgtime/$store.state.total) * 10) / 10)}} s/one resistor <br><br>
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
      isstart: false,
      end: false
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
        this.isstart = false
        this.end = true
      }
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
