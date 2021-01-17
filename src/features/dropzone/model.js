import { restore, createEvent, createEffect, forward } from "effector";

export const setTrackList = createEvent();
export const setActiveTrack = createEvent();

export const validateMusicFx = createEffect(
  (files) =>
    new Promise((res, rej) => {
      const validTypes = ["audio/mp3", "audio/mp4", "audio/mpeg"];

      for (let i = 0; i < files.length; i++) {
        if (validTypes.indexOf(files[i].type) === -1) {
          rej("has invalid type of files");
          break;
        }
      }

      res(Array.from(files));
    })
);

export const $trackList = restore(validateMusicFx.doneData, []);
export const $validateMusicError = restore(validateMusicFx.failData, null);
export const $activeTrack = restore(setActiveTrack, null);

forward({ from: setTrackList, to: validateMusicFx });
