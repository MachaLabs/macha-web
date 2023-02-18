import { Col, Row, StyledChatItem } from "@/styles/StyledComponents";
import {
  Avatar,
  Button,
  Heading,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import OrgControl from "../org/OrgControl";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContext } from "react";
import { ChatContext } from "@/providers/ChatProvider";
import { AuthContext, AuthContextType } from "@/providers/AuthProvider";
import useOrgChannels from "@/hooks/portal/useOrgChannels";
import ModalSlider from "../modal/ModalSlider";
import ChatProfile from "./ChatProfile";
import IconImage from "../icons/IconImage";
import { truncateAddress } from "@/helpers";
import ChatSearch from "./chatcontainer/ChatSearch";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const ChatList = (props: any) => {
  const chatProvider = useContext(ChatContext);
  const authContext = useContext(AuthContext) as AuthContextType;
  const hookOrgChannels = useOrgChannels("6246c7045cc31c36781d668e");
  const modalChatNew = useDisclosure();
  let filteredList = [...chatProvider?.hookChannels?.channels];
  const TemplateChatNew = () => {
    return (
      <ModalSlider event={modalChatNew} size="lg">
        <ChatProfile />
      </ModalSlider>
    );
  };

  const handleSearch = (query) => {
    filteredList = chatProvider?.hookChannels?.channels.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log("filter",filteredList);
    return filteredList;
  };
  const TemplateChatList = () => {
    // const channelDisplayImage = ;
    return (
      <>
        <Row className="header vr-center hr-between">
          <OrgControl />
        </Row>
        {!authContext.isConnected && <ConnectButton />}
        {!chatProvider?.hookChannels?.channels ? (
          <>
            Create your first channel
            <Button size="sm" onClick={props.channelNew}>
              First Channel
            </Button>
          </>
        ) : (
          <Col className="body verticlescroll hidescroll">
            {chatProvider?.hookChannels?.channels?.length ? (
              <>
                <div className="m-b-2">
                  <Row className="menu-heading hr-between vr-center m-b-1">
                    <Heading as="h4" size="md" className="m-b-1">
                      New Channel
                    </Heading>
                    {props?.context?.user?._id == props?.org?.owner ? (
                      <Col>
                        <IconImage
                          path="IconDarkPlus.png"
                          onClick={modalChatNew.onOpen}
                        />
                      </Col>
                    ) : (
                      <></>
                    )}
                  </Row>
                  <Col className="hr-between vr-center m-b-1">
                    <Heading as="h4" size="md" className="m-b-1">
                      Search
                    </Heading>
                    <ChatSearch onSearch={handleSearch} />
                  </Col>
                  <ul>
                    {filteredList.map((item: any, index: number) => (
                      <StyledChatItem key={index}>
                        <Button
                          onClick={() => {
                            console.log("Click on button", item);
                            chatProvider.initiate(item, authContext.address);
                          }}
                          className="menu-item w-100 m-b-0-5"
                          size="xl"
                          variant={
                            chatProvider.hookChannel.channel?.id == item?.id
                              ? "state_brand"
                              : "state_card"
                          }
                        >
                          <Avatar
                            size="md"
                            className="m-r-0-5"
                            name={item.name}
                          />
                          <Col className="w-100 d-flex flex-col">
                            {item.name}
                            <Col className="m-t-0-5">
                              <Text fontSize={"sm"}>
                                {item.lastMessage?.user?.lensUsername ||
                                  item.lastMessage?.user?.lensHandle ||
                                  truncateAddress(item.lastMessage?.user?.id)}
                                : {item.lastMessage?.text}
                              </Text>
                            </Col>
                          </Col>
                          {props.context?.user?._id == props.org?.owner ? (
                            <Col className="hr-center settingsIcon">
                              <Icon>
                                {/* <SettingsIcon
                                                                                as='button'
                                                                                key={item.id}
                                                                                onClick={event => props.channelSetting(event, item)} /> */}
                              </Icon>
                            </Col>
                          ) : (
                            <></>
                          )}
                        </Button>
                      </StyledChatItem>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Button onClick={modalChatNew.onOpen} variant="state_brand">
                  Create Channel
                </Button>
              </>
            )}
          </Col>
        )}
      </>
    );
  };

  return (
    <>
      <TemplateChatList />
      <TemplateChatNew />
    </>
  );
};

export default ChatList;
