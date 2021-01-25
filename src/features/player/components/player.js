import React from "react";
import styled from "styled-components";
import { TrackList } from "./track-list";
import { Header } from "./header";

const Wrapepr = styled.div`
  width: 320px;
  height: 510px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px 0px #6c171e;
  overflow: hidden;
`;

export function Player({ list, toggleTrack, activeTrack }) {
  return (
    <Wrapepr>
      <Header />
      <TrackList
        list={list}
        onTrackClick={toggleTrack}
        activeTrack={activeTrack}
      />
    </Wrapepr>
  );
}
