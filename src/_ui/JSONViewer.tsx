import { style } from "@/styles/StyledConstants";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import IconBase from "./icons/IconsBase";
import { truncateString } from "@/helpers";

const JSONViewer = ({ data }: any) => {
  const [expanded, setExpanded] = useState<any>({});

  const handleToggle = (key: any) => {
    setExpanded({
      ...expanded,
      [key]: !expanded[key],
    });
  };

  const renderData = (data: any, key: any) => {
    if (Array.isArray(data)) {
      return (
        <ul style={{paddingLeft: "0px"}}>
          {data.map((item, index) => (
            <li
              key={index}
              style={{ listStyleType: "none", marginTop: style.margin["xs"] }}
            >
              {renderData(item, `${key}_${index}`)}
            </li>
          ))}
        </ul>
      );
    } else if (typeof data === "object" && data !== null) {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span onClick={() => handleToggle(key)} style={{ cursor: "pointer" }}>
            {expanded[key] ? (
              <IconBase slug="icon-chevron-down" size="md" />
            ) : (
            <Box style={{display: "flex", alignItems: "center"}}>
              <IconBase slug="icon-chevron-next" size="md" />
              <Text marginBottom={0}>name: {data?.name}</Text>
            </Box>
            )}
          </span>
          {expanded[key] && (
            <ul className="testing-1" style={{ }}>
              {Object.entries(data).map(([nestedKey, value]) => (
                <li
                  key={nestedKey}
                  style={{
                    listStyleType: "none",
                    marginBottom: style.margin["xxs"],
                  }}
                >
                  <Flex justify="flex-start">
                    <Box mr={2}>
                      <Text style={{ fontSize: `${style.font.h5}`, fontWeight: `${style.fontWeight.dark}`, color: `${style.color["white.5"]}` }}>{`${nestedKey} : `}</Text>
                    </Box>
                    <Box><Text style={{ fontSize: `${style.font.h5}` }}>{renderData(truncateString(value, 25), `${key}_${nestedKey}`)}</Text></Box>
                  </Flex>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    } else {
      return <span>{data}</span>;
    }
  };

  // console.log("keys", );

  return (
    <div
      className="no-scrollbar"
      style={{
        overflow: "auto",
        height: "500px",
        width: "100%",

        // borderRadius: `${style.card.borderRadius.default}`,
        // padding: "20px",
        // marginLeft: `${style.margin.sm}`,
      }}
    >
      {renderData(data, "root")}
    </div>
  );
};

export default JSONViewer;
