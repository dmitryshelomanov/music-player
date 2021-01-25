import { createEvent } from "effector";

const AudioCtx = window.AudioContext || window.webkitAudioContext;

class Analyser {
  constructor() {
    this.audio = new Audio();
    this.ctx = new AudioCtx();
    this.source = this.ctx.createMediaElementSource(this.audio);
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 2048;
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
    this.trackEnded = createEvent();

    this.audio.addEventListener("ended", () => {
      this.trackEnded();
    });
  }

  updateByteData = () => {
    this.analyser.getByteFrequencyData(this.dataArray);
  };

  play = (track) => {
    return new Promise(async (res, rej) => {
      try {
        await this.ctx.resume();
        this.audio.muted = false;
        this.audio.src = window.URL.createObjectURL(track);
        await this.audio.play();
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
