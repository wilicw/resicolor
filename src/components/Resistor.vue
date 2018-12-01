<template>
  <div class="resistor">
    <div @click="show()">
      <h3>Total: {{this.$store.state.total}}</h3>
      <svg v-if="!this.$store.state.is5band" width="200" height="60">
        <rect x="50" y="20" rx="10" ry="10" width="100" height="30" style="fill:#edde91;opacity:0.8"/>
        <rect x="20" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
        <rect x="150" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
        <rect x="65" y="20" width="8" height="30" :style="`fill:${this.$store.state.band0clr};opacity:${this.$store.state.opacity}`"/>
        <rect x="80" y="20" width="8" height="30" :style="`fill:${this.$store.state.band1clr};opacity:${this.$store.state.opacity}`"/>
        <rect x="95" y="20" width="8" height="30" :style="`fill:${this.$store.state.band2clr};opacity:${this.$store.state.opacity}`"/>
        <rect x="120" y="20" width="8" height="30" :style="`fill:${this.$store.state.band3clr};opacity:${this.$store.state.opacity}`"/>
      </svg>
      <svg v-if="this.$store.state.is5band" width="200" height="60">
        <rect x="50" y="20" rx="10" ry="10" width="100" height="30" style="fill:#8ad8ff;opacity:0.8"/>
        <rect x="20" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
        <rect x="150" y="32" width="30" height="5" style="fill:black;opacity:0.5"/>
        <rect x="65" y="20" width="5" height="30" :style="`fill:${this.$store.state.band0clr};opacity:${this.$store.state.opacity}`"/>
        <rect x="75" y="20" width="5" height="30" :style="`fill:${this.$store.state.band1clr};opacity:${this.$store.state.opacity}`"/>
        <rect x="85" y="20" width="5" height="30" :style="`fill:${this.$store.state.band2clr};opacity:${this.$store.state.opacity}`"/>
        <rect x="95" y="20" width="5" height="30" :style="`fill:${this.$store.state.band3clr};opacity:${this.$store.state.opacity}`"/>
        <rect x="120" y="20" width="5" height="30" :style="`fill:${this.$store.state.band4clr};opacity:${this.$store.state.opacity}`"/>
      </svg>
      <h1>{{this.$store.state.input}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resistor',
  data () {
    return {
    }
  },
  methods: {
    show: function () {
      alert(this.$store.state.ans)
    }
  }
}
</script>
