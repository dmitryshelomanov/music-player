import {
  createEffect,
  createEvent,
  forward,
  sample,
  combine,
  createStore,
} from "effector";
import { condition } from "patronum/condition";
import { analyser } from "../../lib/analyser";
import { $trackList, $activeTrack, setActiveTrack } from "../dropzone";

/**
 * <File>
 */
export const play = createEvent();
export const pause = createEvent();
export const toggleTrack = createEvent();
export const switchTrack = createEvent();

export const playFx = createEffect().use(analyser.play);
const pauseFx = createEffect().use(analyser.pause);

export const $isPlays = createStore(false)
  .on(play, () => true)
  .reset(pause);

export const $player = combine({
  trackList: $trackList,
  activeTrack: $activeTrack,
  isPlays: $isPlays,
});

const toggleTrackWithPlayer = sample(
  $player,
  toggleTrack,
  (...params) => params
);

function runNextTrack({ list, activeTrack }, direction = "next") {
  const index = list.findIndex((track) => track === activeTrack);
  const nextIndex = direction === "next" ? index + 1 : index - 1;

  return index === -1 || !list[nextIndex] ? list[0] : list[nextIndex];
}

condition({
  source: toggleTrackWithPlayer,
  if: ([{ activeTrack, isPlays }, selectedTtack]) =>
    activeTrack === selectedTtack && isPlays,
  then: pause,
  else: play.prepend(([_, selectedTtack]) => selectedTtack),
});

sample({
  source: $player,
  clock: switchTrack,
  fn: (player, direction) => runNextTrack(player, direction),
  target: play,
});

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
