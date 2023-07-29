import ButtonNative from "@/_ui/buttons/ButtonNative";
import FlexRow from "@/_ui/flex/FlexRow";
import IconImage from "@/_ui/icons/IconImage";
import IconBase from "@/_ui/icons/IconsBase";
import { truncateAddress } from "@/helpers";
import useMacha from "@/hooks/studio/useMacha";
import useMachaAuth from "@/hooks/studio/useMachaAuth";
import usePublisherCreate from "@/hooks/studio/usePublisherCreate";
import useAuthStore from "@/store/useAuthStore";
import { style } from "@/styles/StyledConstants";
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { fetchBalance } from "@wagmi/core";
import CreatePublisherModal from "./studio/PublisherModal";
import { useDisconnect } from "wagmi";

export const ConnectWalletButton = (props: any) => {
  const publisherModal = useDisclosure();
  const $address = useAuthStore((state: any) => state.address);
  const hookMacha = useMacha();
  const hookPublisherCreate = usePublisherCreate(publisherModal);
  const toast = useToast();
  const { disconnect } = useDisconnect();
  const $unload = useAuthStore((state: any) => state.unload);
  // console.log("mobile device detection", window.navigator.userAgent);
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            className="w-100"
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    className="w-100"
                    height="2rem"
                    size={props.size}
                    variant="state_brand"
                    onClick={openConnectModal}
                    borderRadius={style.button.borderRadius.default}
                    marginLeft={style.margin.xxs}
                  >
                    <Text
                      paddingBottom={"0px"}
                      marginBottom="0px"
                      fontSize={props?.font}
                      style={{ marginBottom: "0px", paddingBottom: "0px" }}
                    >
                      Connect Wallet
                    </Text>
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <ButtonNative
                    onClick={openChainModal}
                    variant="state_default_hover"
                    height="2rem"
                    marginLeft={style.margin.xxs}
                  >
                    Wrong network
                  </ButtonNative>
                );
              }
              return (
                <div
                  style={{ display: "flex", justifyContent: "flex-end" }}
                  className="w-100"
                >
                  <Menu>
                    <MenuButton
                      variant={"state_default_hover"}
                      as={Button}
                      style={{
                        borderRadius: `${style.card.borderRadius.button}`,
                      }}
                      rightIcon={
                        <IconBase
                          slug="icon-chevron-down"
                          size="sm"
                          style={` marginLeft: "10px" `}
                        />
                      }
                      height={"2rem"}
                    >
                      <FlexRow>
                        {/* <Image src={"../assets/Avatar.svg"} alt="avatar" /> */}
                        <Text
                          marginLeft={style.button.margin.default}
                          fontSize={"sm"}
                          className="mb-0"
                        >
                          {truncateAddress($address)}
                        </Text>
                      </FlexRow>
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => { }}>
                        <FlexRow hrAlign="space-between">
                          <Image
                            style={{ height: "25px", width: "25px" }}
                            src="https://ik.imagekit.io/macha/Avatar/avatar-default.svg?updatedAt=1690541873826"
                            alt=""
                          />
                          {/* <IconImage slug="icon-switchWallet" /> */}
                          <FlexRow
                            hrAlign="flex-start"
                            width="90%"
                            marginLeft={"sm"}
                          >
                            {truncateAddress($address)}
                            {/* <IconImage slug="icon-switchWallet" /> */}
                          </FlexRow>
                        </FlexRow>
                      </MenuItem>
                      {/* <MenuItem onClick={openAccountModal}>
                        <FlexRow hrAlign="space-between">
                          <IconImage slug="icon-switchWallet" />
                          <FlexRow
                            hrAlign="flex-start"
                            width="90%"
                            marginLeft={"sm"}
                          >
                            {"Switch Wallet"}
                          </FlexRow>
                        </FlexRow>
                      </MenuItem> */}
                      <MenuItem onClick={() => {
                        $unload()
                        disconnect()
                      }}>
                        <FlexRow hrAlign="space-between">
                          <IconImage slug="icon-disconnectWallet" />
                          <FlexRow
                            hrAlign="flex-start"
                            width="90%"
                            marginLeft={"sm"}
                          >
                            {"Disconnect Wallet"}
                          </FlexRow>
                        </FlexRow>
                      </MenuItem>
                      {!hookMacha.publisherExists && (
                        <MenuItem
                          onClick={() => {
                            const checkBalance = async () => {
                              const balance = await fetchBalance({
                                address: $address,
                              });
                              if (parseInt(balance.formatted) <= 1) {
                                toast({
                                  title: "You don't have enough balance",
                                  status: "warning",
                                  duration: 10000,
                                  position: "top-right",
                                });
                              }
                            };
                            checkBalance();
                            publisherModal.onOpen();
                          }}
                        >
                          <FlexRow hrAlign="space-between">
                            <IconImage slug="icon-user" size="sm" />
                            <FlexRow
                              hrAlign="flex-start"
                              width="90%"
                              marginLeft={"sm"}
                            >
                              {"Register as Publisher"}
                            </FlexRow>
                          </FlexRow>
                        </MenuItem>
                      )}
                      <CreatePublisherModal
                        modal={publisherModal}
                        hookPublisherCreate={hookPublisherCreate}
                      />
                    </MenuList>
                  </Menu>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
