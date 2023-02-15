import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 6H5C3.34315 6 2 7.34315 2 9V19C2 20.6569 3.34315 22 5 22H15C16.6569 22 18 20.6569 18 19V18H16V19C16 19.5523 15.5523 20 15 20H5C4.44772 20 4 19.5523 4 19V9C4 8.44772 4.44772 8 5 8H6V6Z"
      fill="url(#paint0_linear_2923_43499)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 4H9C8.44772 4 8 4.44772 8 5V15C8 15.5523 8.44772 16 9 16H19C19.5523 16 20 15.5523 20 15V5C20 4.44772 19.5523 4 19 4ZM9 2C7.34315 2 6 3.34315 6 5V15C6 16.6569 7.34315 18 9 18H19C20.6569 18 22 16.6569 22 15V5C22 3.34315 20.6569 2 19 2H9Z"
      fill="url(#paint1_linear_2923_43499)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711L13.7071 12.7071C13.3166 13.0976 12.6834 13.0976 12.2929 12.7071L10.2929 10.7071C9.90237 10.3166 9.90237 9.68342 10.2929 9.29289C10.6834 8.90237 11.3166 8.90237 11.7071 9.29289L13 10.5858L16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289Z"
      fill="url(#paint2_linear_2923_43499)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2923_43499"
        x1={2}
        y1={7.15033}
        x2={19.9315}
        y2={11.1145}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#197CEC" />
        <Stop offset={0.608737} stopColor="#004AD9" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_2923_43499"
        x1={6}
        y1={3.15033}
        x2={23.9315}
        y2={7.11451}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#197CEC" />
        <Stop offset={0.608737} stopColor="#004AD9" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_2923_43499"
        x1={10}
        y1={7.43137}
        x2={18.6522}
        y2={9.98173}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#197CEC" />
        <Stop offset={0.608737} stopColor="#004AD9" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
