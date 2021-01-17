import { createEffect, createEvent, forward } from "effector";
import { analyser } from "../../lib/analyser";
import { setActiveTrack } from "../dropzone";

export const play = createEvent();
export const pause = createEvent();

export const resumeFx = createEffect().use(analyser.play);
const pauseFx = createEffect().use(analyser.pause);

forward({
  from: play,
  to: [setActiveTrack, resumeFx],
});

forward({
  from: pause,
  to: pauseFx,
});
