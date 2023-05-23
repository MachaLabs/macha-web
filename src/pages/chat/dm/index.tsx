import { FlexWindow } from "@/_ui/flex/FlexWindow";
import AuthCard from "@/components/auth/AuthCard";
import ChatContainer from "@/components/chat/chatcontainer/ChatContainer";
import ChatList from "@/components/chat/ChatList";
import ModalWindow from "@/_ui/modal/ModalWindow";
import Nav from "@/_ui/nav/Nav";
import { AuthContext } from "@/providers/AuthProvider";
import { StyledChat, StyledChatList } from "@/styles/StyledComponents";
import { useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";

function IndexDM() {
  const authContext = useContext(AuthContext);
  const modalAuth = useDisclosure();

  useEffect(() => {}, []);

  useEffect(() => {
    if (authContext?.isConnected) {
      modalAuth.onClose();
    } else {
      modalAuth.onOpen();
    }
  }, [authContext?.isConnected, modalAuth.isOpen]);

  const TemplateAuth = () => {
    return (
      <>
        <ModalWindow event={modalAuth}>
          <AuthCard />
        </ModalWindow>
      </>
    );
  };

  return (
    <>
      {authContext.isConnected && (
        <FlexWindow>
          <div className="left">
            <Nav />
          </div>

          <div className="right">
            <StyledChatList>
              <ChatList />
            </StyledChatList>

            <StyledChat>
              <ChatContainer />
            </StyledChat>
          </div>
        </FlexWindow>
      )}
      <TemplateAuth />
    </>
  );
}

export default IndexDM;
