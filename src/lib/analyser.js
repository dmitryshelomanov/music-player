class Analyser {
  constructor() {
    this.audio = new Audio();
    this.ctx = new AudioContext();
    this.source = this.ctx.createMediaElementSource(this.audio);
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 2048;
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
  }

  updateByteData = () => {
    this.analyser.getByteFrequencyData(this.dataArray);
  };

  play = (track) => {
    return new Promise(async (res, rej) => {
      try {
        await this.ctx.resume();
        this.audio.src = window.URL.createObjectURL(track);
        this.audio.play();
        res(true);
      } catch (error) {
        rej(error);
      }
    });
  };

  pause = () => {
    this.audio.pause();
  };
}

export const analyser = new Analyser();
