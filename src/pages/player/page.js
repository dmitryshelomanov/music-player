import React, { useEffect } from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { useHistory } from "react-router-dom";
import bg from "../../assets/bg.jpg";
import { Player, toggleTrack, pause } from "../../features/player";
import { $trackList, $activeTrack } from "../../features/dropzone";
import { Visualize } from "../../ui";

const Background = styled.div`
  z-index: -2;
  filter: blur(2px);
  background: #fff url(${bg}) center center / cover;
`;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:before,
  &:after,
  ${Background} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export function PlayerPage() {
  const { push } = useHistory();
  const trackList = useStore($trackList);
  const activeTrack = useStore($activeTrack);

  useEffect(() => {
    return () => {
      pause();
    };
  }, []);

  useEffect(() => {
    if (trackList.length === 0) {
      push("/");
    }
  }, [push, trackList.length]);

  return (
    <>
      <PlayerWrapper>
        <Background />
        <Player
          activeTrack={activeTrack}
          list={trackList}
          toggleTrack={(file) => {
            toggleTrack(file);
          }}
        />
      </PlayerWrapper>
      <Visualize />
    </>
  );
}
