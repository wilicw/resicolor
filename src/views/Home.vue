<template>
  <div id="home">
    <el-main>
      <Resistor/>
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
  components: {
    KeyBoard,
    Resistor
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
