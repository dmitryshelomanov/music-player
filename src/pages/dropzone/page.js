import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Dropzone,
  validateMusicFx,
  setTrackList,
  $validateMusicError,
} from "../../features/dropzone";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export function DropzonePage() {
  const history = useHistory();
  const validateMusicError = useStore($validateMusicError);

  useEffect(() => {
    return validateMusicFx.done.watch(() => {
      history.push("/player");
    });
  }, [history]);

  return (
    <Wrapper>
      <h1>Simple Music Player</h1>
      <Dropzone handleFiles={setTrackList} error={validateMusicError} />
    </Wrapper>
  );
}
