import React, { useRef } from "react";
import styled from "styled-components";
import classnames from "classnames";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 480px;
  width: 100%;
  height: 125px;
  border: 2px dashed rgba(121, 183, 125, 1);
  color: rgb(121, 183, 125);
  transition: 0.5s;
  opacity: 0.5;

  &.error {
    border-color: red;
    color: red;
  }
`;

const Label = styled.label.attrs({ htmlFor: "file" })`
  color: #03a9f4;
  margin-top: 5px;
`;

const InputFile = styled.input.attrs({ type: "file", id: "file" })`
  display: none;
`;

export function Dropzone({ handleFiles, error }) {
  const zone = useRef();

  return (
    <>
      <Wrapper
        className={classnames({ error: !!error })}
        ref={zone}
        onDrop={(e) => {
          handleFiles(e.dataTransfer.files);
        }}
      >
        <p>{error ? error : "drag & drop music list"}</p>
      </Wrapper>
      <Label>or click here for open files</Label>
      <InputFile
        onChange={(e) => {
          handleFiles(e.target.files);
        }}
        multiple
      />
    </>
  );
}
