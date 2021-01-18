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
    const chartMaxHeigth = 300;
    const chartWidth = 5 * window.devicePixelRatio;
    const ctx = ref.current.getContext("2d");
    let prevSlice = [];

    ref.current.height = chartMaxHeigth;
    ref.current.width = canvasWidth;

    function tick() {
      if (!ref.current) {
        return;
      }

      analyser.updateByteData();

      ctx.clearRect(0, 0, ref.current.width, ref.current.height);
      ctx.save();
      ctx.translate(0, chartMaxHeigth);

      const dataSlice = Array.from(analyser.dataArray).slice(
        0,
        Math.ceil(canvasWidth / chartWidth)
      );

      dataSlice.forEach((data, i) => {
        const yPos =
          data === 0 ? (prevSlice[i] || -1) + 1 : ((prevSlice[i] = data), data);

        ctx.fillStyle = `rgba(235, 32, ${data}, .9)`;
        ctx.fillRect(i * chartWidth, yPos * -1, chartWidth, chartMaxHeigth);
      });

      ctx.stroke();
      ctx.restore();

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
