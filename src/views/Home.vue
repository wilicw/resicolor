<template>
  <div id="home">
    <el-main>
      <Resistor/>
    <el-main>
    </el-main>
      <KeyBoard/>
    </el-main>
  </div>
</template>

<script>
import KeyBoard from '@/components/KeyBoard.vue'
import Resistor from '@/components/Resistor.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  created () {
    this.$store.commit('changeband', true)
  },
  components: {
    KeyBoard,
    Resistor
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
