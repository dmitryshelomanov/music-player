import React from "react";
import styled from "styled-components";
import { TrackList } from "./track-list";

const Wrapepr = styled.div`
  width: 320px;
  height: 510px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px 0px #6c171e;
  overflow: hidden;
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
