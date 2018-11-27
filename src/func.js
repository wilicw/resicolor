import store from './store'

export default {
  genResistor () {
    let band0 = Math.floor((Math.random() * 10)) % 9 + 1
    let band1 = Math.floor((Math.random() * 10))
    let band2 = Math.floor((Math.random() * 10)) % 7
    let band3 = (Math.floor(Math.random() * 10)) % 2
    let res = (band0 * 10 + band1) * Math.pow(10, band2)
    let str = ''
    if (res >= 1000000) {
      str = res / 1000000 + 'M'
    } else if (res >= 1000) {
      str = res / 1000 + 'K'
    } else {
      str = res.toString()
    }
    if (band3 === 0) {
      str += '±10'
    }
    band0 = this.color(band0)
    band1 = this.color(band1)
    band2 = this.color(band2)
    band3 = this.color(band3 + 20)
    if (store.state.ans === str) {
      this.genResistor()
      return
    }
    store.commit('genres', {
      band0: band0,
      band1: band1,
      band2: band2,
      band3: band3,
      str: str
    })
  },
  color (band) {
    switch (band) {
      case 0:
        return '#000000'
      case 1:
        return '#964B00'
      case 2:
        return '#FF0000'
      case 3:
        return '#ffa500'
      case 4:
        return '#fff600'
      case 5:
        return '#9acd32'
      case 6:
        return '#6495ed'
      case 7:
        return '#9400d3'
      case 8:
        return '#a0a0a0'
      case 9:
        return '#FFFFFF'
      case 20:
        return '#c0c0c0'
      case 21:
        return '#cfb53b'
      default:
    }
  }
}
