import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { analyser } from "../lib/analyser";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  display: flex;
  align-items: flex-end;

  > svg {
    width: 100%;
  }
`;

export function Visualize() {
  const svg = useRef();

  useEffect(() => {
    d3.select(svg.current)
      .selectAll("rect")
      .data(analyser.dataArray)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 4)
      .attr("width", 4);
  }, []);

  useEffect(() => {
    let reqId = undefined;

    function tick() {
      analyser.updateByteData();

      d3.select(svg.current)
        .selectAll("rect")
        .data(analyser.dataArray)
        .attr("y", (d) => 500 - d)
        .attr("height", (d) => d)
        .attr("fill", (d) => `rgba(235, 32, ${d}, .9)`);

      reqId = requestAnimationFrame(tick);
    }

    reqId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <Wrapper>
      <svg height="500" ref={svg} />
    </Wrapper>
  );
}
