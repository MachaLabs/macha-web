import AuthCard from "@/components/auth/AuthCard";
import ChatContainer from "@/components/chat/chatcontainer/ChatContainer";
import ChatList from "@/components/chat/ChatList";
import ModalWindow from "@/components/modal/ModalWindow";
import Nav from "@/components/nav/Nav";
import { AuthContext } from "@/providers/AuthProvider";
import { StyledChat, StyledChatList, StyledWindow } from "@/styles/StyledComponents";
import { useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

function ChatComponent() {
  const modalAuth = useDisclosure();
  const authContext = useContext(AuthContext);
  

  useEffect(() => {
    if (authContext?.isConnected) {
      modalAuth.onClose()
    }
    else {
      modalAuth.onOpen();
    }

  }, [authContext?.isConnected, modalAuth.isOpen])

  const TemplateAuth = () => {
    return (
      <>
        <ModalWindow event={modalAuth}>
          <AuthCard/>
        </ModalWindow>
      </>
    )
  }

  return (
    <>
      {authContext?.isConnected && 
        <StyledWindow>
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
      </StyledWindow>
    } 
      <TemplateAuth />
    </>
  );
}

export default ChatComponent;
