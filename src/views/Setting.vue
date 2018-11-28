<template>
  <div id="setting">
    <el-main>
      <div>
        <h2>Setting</h2>
        <el-slider
          v-model="opacity"
          :step="10"
          :min="30"
          :max="80"
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
      opacity: this.$store.state.opacity*100
    }
  },
  components: {
  },
  methods: {
    changeopacity: function (value) {
      console.log(value)
      this.$store.commit('changeopacity', (value / 10) / 10)
    }
  }
}
</script>

<style lang="scss">

</style>
