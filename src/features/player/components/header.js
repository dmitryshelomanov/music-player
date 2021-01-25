import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 1px 15px;
  background: rgba(11, 11, 11, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.h3`
  font-size: 16px;
`;

export function Header() {
  return (
    <Wrapper>
      <Title>Up next</Title>
    </Wrapper>
  );
}
