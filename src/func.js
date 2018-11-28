import store from './store'

export default {
  genResistor () {
    let is5band
    if (store.state.band5) {
      is5band = (((Math.floor(Math.random() * 100)) % 23) === 0)
    } else {
      is5band = false
    }
    let res
    let band0 = Math.floor((Math.random() * 10)) % 9 + 1
    let band1 = Math.floor(Math.random() * 10)
    let band2
    let band3
    let band4
    let band0clr
    let band1clr
    let band2clr
    let band3clr
    let band4clr
    if (is5band) {
      band2 = Math.floor(Math.random() * 10)
      band3 = Math.floor(Math.random() * 10) % 8
      band4 = (Math.floor(Math.random() * 10)) % 4
      res = (band0 * 100 + band1 * 10 + band2) * Math.pow(10, band3)
      band1clr = this.color(band1)
      band0clr = this.color(band0)
      band2clr = this.color(band2)
      band3clr = this.color(band3)
      band4clr = this.color(band4 + 20)
    } else {
      band2 = Math.floor(Math.random() * 10) % 8
      band3 = (Math.floor(Math.random() * 10)) % 3 % 2
      res = (band0 * 10 + band1) * Math.pow(10, band2)

      band0clr = this.color(band0)
      band1clr = this.color(band1)
      band2clr = this.color(band2)
      band3clr = this.color(band3 + 20)
    }
    let str = ''
    if (res >= 1000000) {
      str = res / 1000000 + 'M'
    } else if (res >= 1000) {
      str = res / 1000 + 'K'
    } else {
      str = res.toString()
    }
    if (is5band) {
      if (band4 === 1) {
        str += '±10'
      } else if (band4 === 2) {
        str += '±2'
      } else if (band4 === 3) {
        str += '±1'
      }
    } else {
      if (band3 === 1) {
        str += '±10'
      }
    }
    if (store.state.ans === str) {
      this.genResistor()
      return
    }
    store.commit('genres', {
      band0: band0clr,
      band1: band1clr,
      band2: band2clr,
      band3: band3clr,
      band4: band4clr,
      is5band: is5band,
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
        return '#cfb53b'
      case 21:
        return '#c0c0c0'
      case 22:
        return '#FF0000'
      case 23:
        return '#964B00'
    }
  }
}
