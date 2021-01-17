import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  flex-direction: column;
  cursor: pointer;
  /* transition: 0.3s; */
  padding: 25px 15px;
  font-size: 12px;
  font-weight: 300;
  border-bottom: 1px solid #e6e6e6;

  &:hover {
    background: #eb2045;
    color: #fff;
  }

  &.active {
    background: #eb2045;
    color: #fff;
  }
`;

export function TrackList({ list, onTrackClick, activeTrack }) {
  return (
    <List>
      {list.map((track) => (
        <Item
          className={classnames({ active: activeTrack === track })}
          onClick={() => {
            onTrackClick(track);
          }}
        >
          {track.name}
        </Item>
      ))}
    </List>
  );
}
