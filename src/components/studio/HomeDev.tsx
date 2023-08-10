import ButtonNative from "@/_ui/buttons/ButtonNative";
import { style } from "@/styles/StyledConstants";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import GetStartedCards from "./GetStartedCards";
import ContractCreateModal from "@/components/studio/ContractCreateModal";
import CreatePublisherModal from "./PublisherModal";
import usePublisherCreate from "@/hooks/studio/usePublisherCreate";
import useMacha from "@/hooks/studio/useMacha";
import { fetchBalance } from "@wagmi/core";
import useAuthStore from "@/store/useAuthStore";
import useContractCreate from "@/hooks/studio/useContractCreate";

const HomeDev = () => {
  const publisherModal = useDisclosure();
  const $address = useAuthStore((state: any) => state.address);
  const hookMacha = useMacha();
  const hookPublisherCreate = usePublisherCreate(publisherModal);
  const toast = useToast();
  const contractModal = useDisclosure();
  const hookContractCreate = useContractCreate(contractModal);

  return (
    <Box
      style={{
        marginTop: `${style.margin.xxl}`,
        height: "fit-content",
        paddingTop: `${style.padding.md}`,
      }}
    >
      <Box
        background={style.card.bg.brand}
        borderRadius={style.card.borderRadius.default}
        padding={style.padding.lg}
      >
        <Heading fontSize={style.font.h3} p={0} lineHeight={style.font.h3}>
          Developer Dashboard
        </Heading>
        <Text fontSize={style.font.h5}>
          The ultimate place for developers to explore smart contracts and
          it&#39;s real time transactions from different blockchain protocols
        </Text>
        <Text fontSize={style.font.h5} lineHeight="0rem">
          — all deployable with one click
        </Text>
        {!hookMacha.isLoading && !hookMacha.publisherExists ? (
          <Box display={"flex"}>
            <ButtonNative
              textColorHover="#004ad9"
              boxShadowHover="4px 4px 24px rgba(0,0,0,0.35)"
              backgroundColorHover="#A0CDFF"
              border="1px solid #fff"
              marginTop="xs"
              onClick={() => {
                const checkBalance = async () => {
                  try {
                    const balance = await fetchBalance({
                      address: $address,
                    });
                    if (parseInt(balance.formatted) <= 1) {
                      toast({
                        title: "You don't have enough TFIL balance",
                        status: "warning",
                        duration: 10000,
                        position: "top-right",
                      });
                    }
                  } catch (err) {
                    console.log(err);
                  }
                };
                if ($address == null) {
                  toast({
                    title: "Please connect your wallet.",
                    status: "info",
                    duration: 3000,
                    position: "top-right",
                  });
                  return;
                }
                checkBalance();
                publisherModal.onOpen();
              }}
              text="Set a Publisher Account"
            />
          </Box>
        ) : (
          <Box display={"flex"}>
            <Text
              style={{
                marginTop: `${style.margin.xs}`,
                marginBottom: "0px",
                fontSize: `${style.font.h5}`,
                fontWeight: `${style.fontWeight.dark}`,
              }}
            >
              You are a publisher
            </Text>
            {/* <Button
            style={{color: "#004ad9", backgroundColor: "#A0CDFF",border: "1px solid #fff", marginTop: `${style.margin.xs}`, cursor: "default"}}
            onClick={() => {}}
          >You are a publisher</Button> */}
          </Box>
        )}
      </Box>

      <Box marginTop={style.margin.xl}>
        <Text fontSize={style.font.h3} fontWeight={style.fontWeight.dark}>
          Get started quickly
        </Text>
      </Box>

      <Flex flexWrap="wrap" paddingLeft={2}>
        <GetStartedCards
          image="https://ik.imagekit.io/macha1/studio/push%20contracts-imagev4.svg"
          title="Start Indexing Contracts"
          description="Publish your smart contract for growth and developer community exposure."
          disabled={$address == null}
          onClick={() => {
            if ($address == null) {
              toast({
                title: "Please connect your wallet.",
                status: "info",
                duration: 3000,
                position: "top-right",
              });
              return;
            }
            if (hookMacha.publisherExists) {
              contractModal.onOpen();
            } else {
              toast({
                title: "Please register as a publisher",
                status: "warning",
                duration: 5000,
                position: "top-right",
              });
            }
          }}
        />
        <GetStartedCards
          title="Create Functions"
          image="https://ik.imagekit.io/macha1/studio/create%20functions-imagev4.svg"
          description=" Make fast function calls on contracts to integrate functions in your app"
          tag="soon"
          disabled={true}
        />
        <GetStartedCards
          title="Abstract Metas"
          image="https://ik.imagekit.io/macha1/studio/abstract%20metas-imagev4.svg"
          description="Enable users to discover your metas, like Lens profiles, ENS, Nfts, and more"
          tag="soon"
          disabled={true}
        />
        <GetStartedCards
          title="Graph Playground"
          image="https://ik.imagekit.io/macha1/studio/Graph%20playgroundv4.svg"
          description="Use Macha’s content graph APIs to access user data related to specific contracts."
          tag="soon"
          disabled={true}
        />
        <GetStartedCards
          title="Explore Documentation"
          image="https://ik.imagekit.io/macha1/studio/explore%20doc-imagev4.svg"
          description="Check out our doc repository and sign up to access the fastest API."
          tag="soon"
          disabled={true}
        />
      </Flex>

      <Box marginTop={style.margin.xl}>
        <Text fontSize={style.font.h3} fontWeight={style.fontWeight.dark}>
          Upcoming SDKs
        </Text>
      </Box>

      <Flex flexWrap="wrap" paddingLeft={2}>
        <GetStartedCards
          title="Macha Account SDK"
          description="Provides aggregated user profile data."
          tag="soon"
          disabled={true}
        />
        <GetStartedCards
          title="Macha Meta SDK"
          description="Integrate to enable users to abstract your metas."
          tag="soon"
          disabled={true}
        />
        <GetStartedCards
          title="Macha Graph SDK"
          description="Enables graphQl APIs to fetch macha&#39;s indexed data."
          tag="soon"
          disabled={true}
        />
      </Flex>
      <CreatePublisherModal
        modal={publisherModal}
        hookPublisherCreate={hookPublisherCreate}
      />
      <ContractCreateModal
        modal={contractModal}
        hookContractCreate={hookContractCreate}
      />
    </Box>
  );
};

export default HomeDev;
