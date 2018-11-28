<template>
  <div id="setting">
    <el-main>
      <div>
        <h2>Setting</h2>
        <span class="demonstration">Level</span>
        <el-slider
          v-model="opacity"
          :step="10"
          :min="30"
          :max="90"
          @change="changeopacity"
          show-stops>
        </el-slider>
      </div>
    </el-main>
    <el-footer>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      opacity: this.$store.state.opacity * 100,
      band5: true
    }
  },
  components: {
  },
  created () {
    this.band5 = window.localStorage.band5
    console.log(this.band5)
  },
  methods: {
    changeopacity: function (value) {
      this.$store.commit('changeopacity', (value / 10) / 10)
    },
    changeband: function (value) {
      console.log(value)
      this.$store.commit('changeband', value)
    }
  }
}
</script>

<style lang="scss">

</style>
