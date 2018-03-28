import { EventBus } from './event-bus'


class Analyser {
  constructor() {
    this.audio = new Audio()
    this.ctx = new AudioContext()
    this.source = this.ctx.createMediaElementSource(this.audio)
    this.analyser = this.ctx.createAnalyser()
    this.analyser.fftSize = 2048
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
    this.source.connect(this.analyser)
    this.analyser.connect(this.ctx.destination)
    this.handleEnd()
  }

  updateByteData() {
    this.analyser.getByteFrequencyData(this.dataArray)
  }

  audioSetSource(track) {
    this.audio.src = window.URL.createObjectURL(track)
  }

  play(track, isNext = false) {
    if (isNext) {
      this.audioSetSource(track)
    }
    this.audio.play()
  }

  pause() {
    this.audio.pause()
  }

  handleEnd() {
    this.audio.onended = () => {
      EventBus.$emit('audioEnded')
    }
  }
}

export default new Analyser
