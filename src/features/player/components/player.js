import React from "react";
import styled from "styled-components";
import { TrackList } from "./track-list";

const Wrapepr = styled.div`
  width: 320px;
  height: 510px;
  background: #fff;
  border-radius: 5px;
`;

export function Player({ list, handlePlay, activeTrack }) {
  return (
    <Wrapepr>
      <TrackList
        list={list}
        onTrackClick={handlePlay}
        activeTrack={activeTrack}
      />
    </Wrapepr>
  );
}
