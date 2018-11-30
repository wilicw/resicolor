<template>
  <div id="home">
    <el-main>
      <svg width="200" height="60">
        <rect x="50" y="20" rx="10" ry="10" width="100" height="30" style="fill:#8ad8ff;opacity:0.8"/>
        <rect x="20" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
        <rect x="150" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
        <rect x="65" y="20" width="5" height="30" style="fill:#fff600;"/>
        <rect x="75" y="20" width="5" height="30" style="fill:#000000;"/>
        <rect x="85" y="20" width="5" height="30" style="fill:#fff600;"/>
        <rect x="95" y="20" width="5" height="30" style="fill:#000000;"/>
        <rect x="120" y="20" width="5" height="30" style="fill:#cfb53b;"/>
      </svg>
      <h1 class="notfound">404 Not Found</h1>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.notfound {
  font-family: 'AvenirLTStd';
  font-size: xx-large;
}
</style>
