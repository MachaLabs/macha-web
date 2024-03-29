import FlexColumn from "@/_ui/flex/FlexColumn";
import IconBase from "@/_ui/icons/IconsBase";
import { style } from "@/styles/StyledConstants";
import GlobalIcons from "@/styles/GlobalIcons";
import {
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import SearchOption from "./SearchOption";
import { dataPrompts } from "@/data/dataPrompts";
import TagNative from "@/_ui/tag/TagNative";
import Loader from "@/_ui/loader/Loader";

type Props = {
  options?: any;
  height?: any;
  hookSearch?: any;
  suggestionsActive?: any;
};

const SearchHeader = ({ options, height, hookSearch, suggestionsActive = false}: Props) => {
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <>
      <FlexColumn width="100%" height="fit-content">
        <InputGroup
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            setShowSuggestions(false);
          }}
          flexDirection="column"
          size="md"
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <InputLeftElement alignItems="start">
              <Box
                style={{
                  height: height ? height : "5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: `${style.margin.sm}`,
                }}
              >
                {!hookSearch?.plugin && <IconBase slug="icon-search" size="3xl" />}
                {hookSearch?.plugin && <TagNative image={`${GlobalIcons[hookSearch?.plugin?.image]}`} />}
              </Box>
            </InputLeftElement>
            
            <input
              value={hookSearch?.inputValue} // Use local state to control the input value
              type="text"
              ref={hookSearch?.searchRef}
              className="searchHeader"
              onChange={hookSearch?.handleInputChange} // Call handleInputChange when input changes
              onKeyDown={hookSearch?.handleKeyEnter} // Call handleKeyDown on Enter key press
              placeholder={hookSearch?.plugin?.heading ? hookSearch?.plugin?.heading : "Try Spectacular Search Now"}
              style={{
                height: height ? height : "5rem",
                color: `${colorMode == "light" ? "#3d3d3d" : ""}`,
                borderRadius: `${style.card.borderRadius.default}`,
                fontSize: `${style.font.h6}`,
                paddingRight: `${style.padding.xl}`,
                paddingLeft: `${style.padding.xxl}`,
                background: `${
                  colorMode == "light"
                    ? "rgba(255,255,255,1)"
                    : style.input.bg.default
                }`,
                border: `${
                  colorMode == "light" ? "1px solid #e2e2e2" : style.input.border.default
                }`,
                width: "100%",
              }}
            />

            <InputRightElement alignItems="start">
              <Box
                style={{
                  height: height ? height : "5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: `${style.margin.sm}`,
                }}
              >
                {hookSearch?.isLoading && <Loader size="sm" />}
              </Box>
            </InputRightElement>
          </Box>
          {suggestionsActive && showSuggestions && (
            <Box
              sx={{
                "&::-webkit-scrollbar-thumb": {
                  width: "1px !important",
                },
              }}
              width={"100%"}
              marginTop={style.margin.sm}
              borderRadius={style.card.borderRadius.default}
              background={colorMode == "light" ? "#fff" : style.card.bg.default}
              boxShadow="-1px 1px 4px rgba(17, 108, 230, 0.6),1px -1px 4px rgba(17, 108, 230, 0.6)"
              border={
                colorMode == "light"
                  ? ""
                  : "1px solid rgba(15, 23, 46, 1) !important"
              }
              paddingY={style.padding.xxs}
              overflow="hidden"
              position={"absolute"}
              bottom="20"
              zIndex={200}
            >
              <Box
                overflowY={"scroll"}
                height={"10rem"}
                paddingX={style.padding.xs}
              >
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    paddingRight: `${style.padding.xs}`,
                    paddingLeft: `${style.padding.xs}`,
                    paddingTop: `${style.padding.xxs}`,
                  }}
                >
                  <Text
                    mb={style.margin.xxs}
                    fontSize={style.font.h7}
                    color={
                      colorMode == "light" ? "#282828" : style.color["white.5"]
                    }
                    fontWeight={style.fontWeight.dark}
                  >
                    Trending Searches
                  </Text>
                </Box>

                {dataPrompts[`${router.query?.plugin ? router.query?.plugin : 'general'}`].map((item: any) => {
                  return (
                    <SearchOption
                    text={item.text}
                    onClick={() => {
                      // TODO: This needs to be resolved
                      setShowSuggestions(false);
                    }}
                  />
                  );
                })}
               
              </Box>
            </Box>
          )}
        </InputGroup>
      </FlexColumn>

      <style jsx>{`
        .searchHeader {
        }
        ${colorMode == "light"
          ? `.searchHeader:focus {
          box-shadow: -1px 1px 4px rgba(17, 108, 230, 0.6),
            1px -1px 4px rgba(17, 108, 230, 0.6);
          outline: none !important;
        }`
          : `.searchHeader:focus {
          box-shadow: -1px 1px 4px rgba(17, 108, 230, 0.6),
            1px -1px 4px rgba(17, 108, 230, 0.6);
          border: 1px solid rgba(15, 23, 46, 1) !important;
          outline: none !important;
        }`}

        .searchHeader:focus-visible {
          outline: none !important;
        }
      `}</style>
    </>
  );
};

export default SearchHeader;
