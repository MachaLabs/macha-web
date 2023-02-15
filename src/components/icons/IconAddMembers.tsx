import {View, Text} from "react-native";
import React from "react";
import Svg, {Path} from "react-native-svg";
import GlobalStyles from "../../styles/GlobalStyles";

const IconAddMembers = () => {
    return (
        <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M1 17V20C1 20.5523 1.44772 21 2 21H16C16.5523 21 17 20.5523 17 20V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17Z"
                fill={GlobalStyles.color.primaryBlue}
            />
            <Path
                d="M18.9839 20.3118C18.9485 20.655 19.1912 21 19.5363 21H22C22.5522 21 23 20.5523 23 20V17C23 14.7909 21.2091 13 19 13H18.0314C17.8153 13 17.6967 13.2597 17.8253 13.4334C18.5635 14.4304 19 15.6642 19 17V20C19 20.1053 18.9945 20.2093 18.9839 20.3118Z"
                fill={GlobalStyles.color.primaryBlue}
            />
            <Path
                d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                fill={GlobalStyles.color.primaryBlue}
            />
            <Path
                d="M14.3509 10.9476C14.0101 10.892 13.894 10.4893 14.0782 10.1973C14.6622 9.2717 15.0001 8.17531 15.0001 7C15.0001 5.82469 14.6622 4.7283 14.0782 3.80271C13.894 3.51073 14.0101 3.10804 14.3509 3.05242C14.5622 3.01793 14.7791 3 15.0001 3C17.2093 3 19.0001 4.79086 19.0001 7C19.0001 9.20914 17.2093 11 15.0001 11C14.7791 11 14.5622 10.9821 14.3509 10.9476Z"
                fill={GlobalStyles.color.primaryBlue}
            />
        </Svg>
    );
};

export default IconAddMembers;
