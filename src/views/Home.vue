<template>
  <div id="home">
    <el-main>
      <Resistor/>
    </el-main>
    <el-footer>
      <KeyBoard/>
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
      menushow: false
    }
  },
  components: {
    KeyBoard,
    Resistor
  },
  methods: {
    mode: function (mode) {
      console.log(mode)
    }
  }
}
</script>

<style lang="scss">

</style>
