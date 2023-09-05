import ButtonNative from "@/_ui/buttons/ButtonNative";
import FlexColumn from "@/_ui/flex/FlexColumn";
import FlexRow from "@/_ui/flex/FlexRow";
import InputLabel from "@/_ui/input/InputLabel";
import Loader from "@/_ui/loader/Loader";
import chains from "@/data/network";
import useCreatorCreate from "@/hooks/studio/useCreatorCreate";
import GlobalIcons from "@/styles/GlobalIcons";
import { style as gStyle, style } from "../../styles/StyledConstants";

type Props = {
  heading?: string;
  subHeading?: string;
  image?: string;
  state?: boolean;
  floorPrice?: string;
  description?: string;
  owner_name?: string;
  owner_image?: string;
  owner_heading?: string;
  action_name?: string;
  action_type?: string;
  action_value?: string;
  width?: string;
  onClick?: any;
  slug?: any;
  cardHeight?: any;
  music?: any;
};

import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  List,
  ListItem,
  Tag,
  TagCloseButton,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MCard from "@/_sdk/MCard";

const NftCard = ({ heading, subHeading, image, state }: Props) => {
  return (
    <FlexRow hrAlign="space-between">
      <FlexColumn hrAlign="flex-start" vrAlign="flex-start">
        {state ? (
          <Box
            borderRadius={gStyle.card.borderRadius.default}
            border={gStyle.card.border.default}
            width="100%"
            height="80%"
            padding={style.padding.md}
          >
            <Text
              fontSize={style.font.h1}
              marginBottom={0}
              fontWeight={style.fontWeight.dark}
            >
              {heading}
            </Text>
            <Text
              fontSize={style.font.h1}
              marginBottom={0}
              marginTop={0}
              fontWeight={style.fontWeight.dark}
            >
              {subHeading}
            </Text>
            <Box>
              <MCard
                title=""
                image="./assets/NFT_card_hero_image.png"
                slug="Macha NFT"
                // width="30%"
                cardHeight="8rem"
                description="This Soul Bound Token is NFT delivered to address 0xCB811.. as proof of owning Macha Profile"
                onClick={() => {
                  // router.push(`/search/meta/${item?._id}`);
                }}
              />
            </Box>
            <Text marginBottom={0} fontSize={style.font.h5}>
              Select Network
            </Text>
            <Box display={"flex"} width="50%">
              {Object.keys(chains).map((chain: any, index) => {
                return (
                  <Box
                    key={index}
                    borderRadius={"50%"}
                    paddingX={style.padding.xxs}
                  >
                    <Image
                      src={GlobalIcons[chains[chain].chainImage]}
                      // height={"50px"}
                      // width={"50px"}
                      alt=""
                    />
                  </Box>
                );
              })}
            </Box>
            <Text fontSize={style.font.h5}>
              It will take just 2 mins to setup profile and discover your own
              chain content like ENS, Lens and more.
            </Text>

            <ButtonNative
              text="Claim NFT"
              variant="state_brand"
              width="7rem"
              marginTop="sm"
            />
          </Box>
        ) : (
          <Box
            borderRadius={gStyle.card.borderRadius.default}
            border={gStyle.card.border.default}
            width="100%"
            height="80%"
            padding={style.padding.md}
          >
            <Text
              fontSize={style.font.h1}
              marginBottom={0}
              fontWeight={style.fontWeight.dark}
            >
              {heading}
            </Text>
            <Text
              fontSize={style.font.h1}
              marginBottom={0}
              marginTop={0}
              fontWeight={style.fontWeight.dark}
            >
              {subHeading}
            </Text>

            <Box>
              <FlexRow>
                <Image src="./assets/Blue_tick.svg" alt="blue_tick" width="20%" />
                <Text fontSize={style.font.h5}>
                  Supercharged search algorithms by text and image models.
                </Text>
              </FlexRow>
              <Box>
                <Image src="./assets/Blue_tick.svg" alt="blue_tick" />
                <Text>
                  Supercharged search algorithms by text and image models.
                </Text>
              </Box>
              <Box>
                <Image src="./assets/Blue_tick.svg" alt="blue_tick" />
                <Text>
                  Supercharged search algorithms by text and image models.
                </Text>
              </Box>
            </Box>
          </Box>
        )}
        {/* <Box
          borderRadius={gStyle.card.borderRadius.default}
          border={gStyle.card.border.default}
          width="100%"
          height="80%"
          padding={style.padding.md}
        >
          <Text
            fontSize={style.font.h1}
            marginBottom={0}
            fontWeight={style.fontWeight.dark}
          >
            {heading}
          </Text>
          <Text
            fontSize={style.font.h3}
            lineHeight={"1.8rem"}
            // marginBottom={0}
            marginTop={0}
            fontWeight={style.fontWeight.dark}
          >
            {subHeading}
          </Text>

          <MCard
            title=""
            image="../../../../assets/Claim_Macha_Nft.png"
            slug="Macha NFT"
            width="18rem"
            // cardHeight="8rem"
            description="This Soul Bound Token is NFT delivered to address 0xCB811.. as proof of owning Macha Profile"
            onClick={() => {
              // router.push(`/search/meta/${item?._id}`);
            }}
          />

          <Text
            marginBottom={0}
            fontSize={style.font.h6}
            marginTop={style.margin.sm}
          >
            Select Network
          </Text>
          <Box display={"flex"} width="50%">
            {Object.keys(chains).map((chain: any, index) => {
              return (
                <Box
                  key={index}
                  borderRadius={"50%"}
                  paddingX={style.padding.xxs}
                >
                  <Image
                    src={GlobalIcons[chains[chain].chainImage]}
                    height={"50px"}
                    width={"50px"}
                    alt=""
                  />
                </Box>
              );
            })}
          </Box>
          <Text fontSize={style.font.h6} mb="0">
            It will take just 2 mins to setup profile and discover your own
            chain content like ENS, Lens and more.
          </Text>

          <ButtonNative
            text="Claim NFT"
            variant="state_brand"
            width="7rem"
            marginTop="xs"
          />
        </Box> */}
      </FlexColumn>
      <FlexColumn hrAlign="flex-start" vrAlign="flex-start">
        <Box
          borderRadius={gStyle.card.borderRadius.default}
          border={gStyle.card.border.default}
          width="98%"
          overflow={"hidden"}
        >
          <Image
            src={image}
            alt="right image"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
      </FlexColumn>
    </FlexRow>
  );
};

export default NftCard;
