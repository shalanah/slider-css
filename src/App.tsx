import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import styled from "styled-components";

const Slider = styled(RangeSlider)`
  --bg: #fff;
  height: 30px;
  background: none !important;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  cursor: pointer;
  display: block;
  position: relative;
  width: 100%;
  input[type="range"] {
    -webkit-appearance: none;
    pointer-events: none;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    background-color: transparent;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
  }
  input[type="range"]::-moz-range-thumb {
    width: 0;
    height: 0;
    border: 0;
  }
  input[type="range"]:focus {
    outline: 0;
  }
  &:before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    background: #ccc;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .range-slider__range {
    height: 3px;
    background: var(--bg);
    position: absolute;
    z-index: 1;
    transform: translate(0, -50%);
    top: 50%;
    width: 100%;
  }
  .range-slider__thumb {
    position: absolute;
    z-index: 3;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    height: 26px;
    width: 26px;
    background: transparent;
    transform-origin: center;
    transition: 0.1s transform, 0.3s border;
    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: var(--bg);
      border-radius: 100%;
      transform-origin: center;
      transition: 0.15s;
    }
    &:before {
      transform: scale(0.5);
    }
    &:hover {
      cursor: grab;
      &:before {
        transform: scale(1);
      }
      &:after {
        transform: scale(1.5);
        opacity: 0.3;
      }
    }
  }
  &.single-thumb .range-slider__thumb[data-lower] {
    width: 0px;
    visibility: hidden;
  }
  .range-slider__thumb[data-active]:after {
    opacity: 1;
    transform: scale(1.5);
    transition: 0.4s;
  }
`;

export default function App() {
  const [drag, setDrag] = useState(false);
  const [value, setValue] = useState([0, 50]);
  useEffect(() => {
    if (drag) {
      document.body.classList.add("pointer-grabbing");
    } else {
      document.body.classList.remove("pointer-grabbing");
    }
  }, [drag]);
  return (
    <>
      <Slider
        value={value}
        step={0.5}
        rangeSlideDisabled={true}
        onThumbDragStart={() => {
          setDrag(true);
        }}
        onThumbDragEnd={() => {
          setDrag(false);
        }}
        onInput={(v) => {
          setValue(v);
        }}
      />
      <Slider
        value={[0, value[1]]}
        step={0.5}
        className="single-thumb"
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
        onThumbDragStart={() => {
          setDrag(true);
        }}
        onThumbDragEnd={() => {
          setDrag(false);
        }}
        onInput={(v) => {
          setValue((prev) => [prev[0], v[1]]);
        }}
      />
    </>
  );
}
