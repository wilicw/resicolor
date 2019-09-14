import store from './store'

export default {
  genResistor () {
    let is5band
    if (store.state.band5) {
      is5band = ((this.rand() * 10 % 23) === 0)
    } else {
      is5band = false
    }
    let band = [0, 0, 0, 0, 0]
    let bandclr = [0, 0, 0, 0, 0]

    band[0] = this.rand() % 9 + 1
    band[1] = this.rand()
    if (is5band) {
      band[2] = this.rand()
      band[3] = this.rand() % 8
      band[4] = this.rand() % 4 + 20
      for (let i = 0; i < 5; i++) {
        bandclr[i] = this.numtocolor(band[i])
      }
    } else {
      band[2] = this.rand() % 8
      band[3] = this.rand() % 3 % 2 + 20
      for (let i = 0; i < 4; i++) {
        bandclr[i] = this.numtocolor(band[i])
      }
    }
    let str = this.bandtoresistor(band)
    if (store.state.ans === str) {
      this.genResistor()
      return
    }
    store.commit('genres', {
      band0: bandclr[0],
      band1: bandclr[1],
      band2: bandclr[2],
      band3: bandclr[3],
      band4: bandclr[4],
      is5band: is5band,
      str: str
    })
  },
  numtocolor (band) {
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
  },
  colortonum (color) {
    switch (color) {
      case '#000000':
        return 0
      case '#964B00':
        return 1
      case '#FF0000':
        return 2
      case '#ffa500':
        return 3
      case '#fff600':
        return 4
      case '#9acd32':
        return 5
      case '#6495ed':
        return 6
      case '#9400d3':
        return 7
      case '#a0a0a0':
        return 8
      case '#FFFFFF':
        return 9
      case '#cfb53b':
        return 20
      case '#c0c0c0':
        return 21
    }
    return -1
  },
  genv1tov2 () {
    let version = window.localStorage.getItem('version')
    if (version === '0.0.2') {
      return
    }
    let history = JSON.parse(window.localStorage.getItem('history'))
    let newarray = []
    history.forEach((i) => {
      let data = []
      console.log(i)
      data.push(this.colortonum(i.band0clr), this.colortonum(i.band1clr), this.colortonum(i.band2clr), this.colortonum(i.band3clr))
      if (this.colortonum(i.band4clr) !== undefined || this.colortonum(i.band4clr) !== '') {
        data.push(this.colortonum(i.band4clr))
      }
      newarray.push({ data })
    })
    window.localStorage.setItem('history', JSON.stringify(newarray))
    window.localStorage.setItem('version', '0.0.2')
  },
  readhistory () {
    let history = JSON.parse(window.localStorage.getItem('history'))
    let version = window.localStorage.getItem('version')
    let data = []
    if (version !== '0.0.2') {
      this.genv1tov2()
    }
    history = JSON.parse(window.localStorage.getItem('history'))
    history.forEach((i) => {
      data.push({
        ans: this.bandtoresistor(i.data),
        band0clr: this.numtocolor(i.data[0]),
        band1clr: this.numtocolor(i.data[1]),
        band2clr: this.numtocolor(i.data[2]),
        band3clr: this.numtocolor(i.data[3]),
        band4clr: this.numtocolor(i.data[4])
      })
    })
    return data
  },
  commitHistory (data) {
    let version = window.localStorage.getItem('version')
    if (version !== '0.0.2') {
      this.genv1tov2()
    }
    let history = JSON.parse(window.localStorage.getItem('history'))
    let newdata = []
    newdata.push(this.colortonum(data.band0clr), this.colortonum(data.band1clr), this.colortonum(data.band2clr), this.colortonum(data.band3clr))
    if (data.is5band) {
      newdata.push(this.colortonum(data.band4clr))
    }
    history.push({ data: newdata })
    if (history.length > 500) {
      history.shift()
    }
    window.localStorage.setItem('history', JSON.stringify(history))
  },
  rand () {
    return Math.floor(Math.random() * 10)
  },
  bandtoresistor (band) {
    let bandclr = []
    let is5band = !((band[4] === undefined) || (band[4] === 0) || (band[4] === -1))
    let res
    if (is5band) {
      res = (band[0] * 100 + band[1] * 10 + band[2]) * Math.pow(10, band[3])
      for (let i = 0; i < 4; i++) {
        bandclr[i] = this.numtocolor(band[i])
      }
      bandclr[4] = this.numtocolor(band[4] + 20)
    } else {
      res = (band[0] * 10 + band[1]) * Math.pow(10, band[2])
      for (let i = 0; i < 3; i++) {
        bandclr[i] = this.numtocolor(band[i])
      }
      bandclr[3] = this.numtocolor(band[3] + 20)
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
      if (band[4] === 21) {
        str += '±10'
      } else if (band[4] === 22) {
        str += '±2'
      } else if (band[4] === 23) {
        str += '±1'
      }
    } else {
      if (band[3] === 21) {
        str += '±10'
      }
    }
    return str
  }
}
