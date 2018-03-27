class Analyser {
  constructor() {
    this.audio = new Audio()
    this.ctx = new AudioContext()
    this.source = this.ctx.createMediaElementSource(this.audio)
    this.analyser = this.ctx.createAnalyser()
    this.analyser.fftSize = 256
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
  }

  updateByteData() {
    this.analyser.getByteFrequencyData(this.dataArray)
  }

  audioSetSource(track) {
    this.audio.src = window.URL.createObjectURL(track)
  }

  toggleConnected(prop) {
    this.source[prop](this.analyser)
    this.analyser[prop](this.ctx.destination)
  }

  play() {
    this.toggleConnected('connect')
    this.audio.play()
  }

  pause() {
    this.toggleConnected('disconnect')
    this.audio.pause()
  }
}

export default new Analyser
