import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import styled from "styled-components";

const Slider = styled(RangeSlider)`
  --bg: #fff;
  height: 30px;
  background: none !important;
  position: relative;
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
  }
  .range-slider__thumb {
    box-sizing: border-box;
    height: 26px;
    width: 26px;
    background: transparent;
    transform-origin: center;
    transition:
      0.1s transform,
      0.3s border;
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
  return (
    <>
      <Slider step={"any"} rangeSlideDisabled={true} />
      <Slider
        className="single-thumb"
        defaultValue={[0, 50]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
        step={"any"}
      />
    </>
  );
}
