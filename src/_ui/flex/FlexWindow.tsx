import { style } from "@/styles/StyledConstants";
import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  view?: string;
  children?: any;
  navElem?: any;
  bodyElem?: any;
  style?: any;
  marginTop?: any;
  leftElem?: any;
  rightElem?: any;
  navLeft?: any;
  navTop?: any;
  noPaddingTop?: boolean;
};

export const FlexWindow = ({
  view = "col",
  children,
  bodyElem,
  marginTop,
  navLeft,
  navTop,
  noPaddingTop,
}: Props) => {
  return (
    <div
      className="window"
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        background: `${style.body.bg.default}`,
      }}
    >
      {view == "col" && (
        <>
          <div
            style={{
              position: "fixed",
              top: "0",
              zIndex: "1000",
              width: "100%",
              background: `${style.body.bg.default}`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {navTop}
          </div>
          <div style={{ marginTop: `${marginTop}` }}>{bodyElem}</div>
        </>
      )}

      {view == "row" && (
        <>
          <div
            className="window-left"
            style={{ height: "100vh", position: "fixed", left: "0" }}
          >
            {navLeft}
          </div>
          <div
            className="window-right"
            style={{ marginLeft: `${style.nav.widthLeft}` }}
          >
            {bodyElem}
          </div>
        </>
      )}

      {view == "both" && (
        <Box width={"100%"}>
          <Box
            width={"5%"}
            className="window-left"
            style={{ height: "100vh", position: "fixed", left: "0" }}
          >
            {navLeft}
          </Box>
          <Box width="95%" className="window-right" marginLeft={"5%"}>
            {navTop && (
              <div
                className="windowTop"
                style={{
                  position: "fixed",
                  top: "0",
                  padding: "0% 6%",
                  paddingTop: `${style.margin.md}`,
                  background: "rgb(0, 4, 13)",
                  zIndex: "1000",
                  width: "95%",
                  // background: `${style.body.bg.default}`,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {navTop}
              </div>
            )}
            <div
              className="window-bottom"
              style={{
                padding: "0% 6%",
                paddingTop: `${noPaddingTop ? "0px" : style.margin["5xl"]}`,
              }}
            >
              {bodyElem}
            </div>
          </Box>
        </Box>
      )}
    </div>
  );
};
