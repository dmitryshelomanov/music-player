import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { analyser } from "../lib/analyser";
import { useResize } from "../lib/resize";

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
  const ref = useRef();
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  useResize(({ width }) => {
    setCanvasWidth(width);
  });

  useEffect(() => {
    let reqId = undefined;
    const chartMaxHeigth = 500;
    const chartWidth = 4;
    const ctx = ref.current.getContext("2d");

    ref.current.height = chartMaxHeigth;
    ref.current.width = canvasWidth;

    function tick() {
      analyser.updateByteData();

      ctx.clearRect(0, 0, ref.current.width, ref.current.height);

      const dataSlice = Array.from(analyser.dataArray).slice(
        0,
        Math.ceil(canvasWidth / chartWidth)
      );

      dataSlice.forEach((data, i) => {
        const yPos = data === 0 ? chartMaxHeigth : data;

        ctx.fillStyle = `rgba(235, 32, ${data}, .9)`;
        ctx.fillRect(i * chartWidth, yPos, chartWidth, chartMaxHeigth);
      });

      ctx.stroke();

      reqId = requestAnimationFrame(tick);
    }

    reqId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(reqId);
    };
  }, [canvasWidth]);

  return (
    <Wrapper>
      <canvas ref={ref} />
    </Wrapper>
  );
}
