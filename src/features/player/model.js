import { createEffect, createEvent, forward, sample, combine } from "effector";
import { analyser } from "../../lib/analyser";
import { $trackList, $activeTrack, setActiveTrack } from "../dropzone";

export const play = createEvent();
export const pause = createEvent();
export const switchTrack = createEvent();

export const playFx = createEffect().use(analyser.play);
const pauseFx = createEffect().use(analyser.pause);

export const $player = combine($trackList, $activeTrack, (list, active) => ({
  list,
  active,
}));

function runNextTrack({ list, active }, direction = "next") {
  const index = list.findIndex((track) => track === active);
  const nextIndex = direction === "next" ? index + 1 : index - 1;

  return index === -1 || !list[nextIndex] ? list[0] : list[nextIndex];
}

forward({
  from: play,
  to: [setActiveTrack, playFx],
});

forward({
  from: pause,
  to: pauseFx,
});

forward({
  from: analyser.trackEnded,
  to: switchTrack,
});

sample({
  source: $player,
  clock: switchTrack,
  fn: (player, direction) => runNextTrack(player, direction),
  target: play,
});
