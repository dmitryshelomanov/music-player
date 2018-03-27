export class Analyser {
  constructor(source) {
    this.ctx = new AudioContext()
    this.analyser = this.ctx.createAnalyser()
    this.processor = this.ctx.createScriptProcessor(2048, 1, 1)
    this.createConnected()
    this.buffer = null
    this.source = null
    this.currentTime = 0
  }

  decodeAudioData(buffer) {
    return new Promise((res, rej) => {
      const self = this

      this.ctx.decodeAudioData(buffer, (decodedArrayBuffer) => {
        self.buffer = decodedArrayBuffer
        res(true)
      }, rej)
    })
  }

  createConnected() {
    this.analyser.connect(this.ctx.destination)
    this.processor.connect(this.ctx.destination)
  }

  play() {
    this.source = this.ctx.createBufferSource()
    this.source.buffer = this.buffer
    this.source.connect(this.analyser)
    this.source.connect(this.processor)
    this.source.connect(this.ctx.destination)
    this.source.start(0, this.currentTime)
  }

  stop() {
    this.currentTime = this.ctx.currentTime
    console.log(this.source.)
    this.source.disconnect(this.analyser)
    this.source.disconnect(this.processor)
    this.source.disconnect(this.ctx.destination)
    this.source.stop(0)
  }
}
