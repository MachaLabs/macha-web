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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.04289 19.2071C7.65237 18.8166 7.65237 18.1834 8.04289 17.7929L13.8358 12L8.04289 6.20711C7.65237 5.81658 7.65237 5.18342 8.04289 4.79289C8.43342 4.40237 9.06658 4.40237 9.45711 4.79289L15.25 10.5858C16.031 11.3668 16.031 12.6332 15.25 13.4142L9.45711 19.2071C9.06658 19.5976 8.43342 19.5976 8.04289 19.2071Z"
      fill="url(#paint0_linear_2959_36816)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2959_36816"
        x1={8.33133}
        y1={19.5}
        x2={14.5215}
        y2={4.4063}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#197CEC" />
        <Stop offset={0.608737} stopColor="#004AD9" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
