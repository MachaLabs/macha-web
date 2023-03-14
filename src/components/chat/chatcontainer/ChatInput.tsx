import IconImage from "@/components/icons/IconImage";
import ModalWindow from "@/components/modal/ModalWindow";
import Pop from "@/components/pop/Pop";
import PortalLoader from "@/components/PortalLoader";
import useCreateLensPost from "@/hooks/lens/useCreateLensPosts";
import {
  Col,
  Row,
  StyledChatInput,
  StyledChatInputContainer,
  StyledChatPreview,
  StyledIcon,
} from "@/styles/StyledComponents";
import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Heading,
  Image,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { ChatContext } from "stream-chat-react";
import LayoutNFTCard from "../../../layouts/nft/LayoutNFTCard";
import ChatMention from "../ChatMention";

const ChatInput = (props: any) => {
  const modalPost = useDisclosure();
  const hookCreateLensPost = useCreateLensPost();
  const createPostRef = useRef<any>();

  const templateReply = () => {
    return (
      <>
        {props?.chatContext?.hookChat?.actionMessage?.action === "REPLY" ? (
          <div className="reply">
            <Col className="w-100 vr-center">
              <Row className="vr-center">
                <IconImage path="IconDarkReply.png" />
                <Divider orientation="vertical" color={"#246BFD"} />
                {/* <Avatar
                  size="xs"
                  src={props?.chatContext?.hookChat?.actionMessage?.item?.user.lensImage}
                />
                <Text fontSize="xs">
                  @{props?.chatContext?.hookChat?.actionMessage?.item?.user?.lensHandle}
                </Text> */}
              </Row>
              <Row>
                <Text fontSize="xs">
                  {props?.chatContext?.hookChat?.actionMessage?.item?.text}
                </Text>
              </Row>
            </Col>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const TemplatePostNew = () => {
    return (
      <ModalWindow
        event={modalPost}
        header={
          <Heading as="h6" size="sm">
            New Lens Post
          </Heading>
        }
      >
        <Col className="p-1">
          <Text fontSize={16}>Your Lens Post Heading Here</Text>
          <Textarea
            className="m-b-1 m-t-1"
            size="xl"
            placeholder="Your Lens Post Content Here"
            ref={createPostRef}
          ></Textarea>
          <Row className="m-b-1">
            <IconImage
              path="IconDarkFiles.png"
              style={{ className: "m-r-0-5" }}
            />
            <IconImage path="IconDarkPost.png" />
          </Row>
          <Button
            size="sm"
            variant="state_brand w-content"
            onClick={() => {
              hookCreateLensPost.validateMetadataAndPostOnLens({
                profileId: props?.authContext?.user?.lens?.id,
                postContent: createPostRef.current.value,
              });
            }}
          >
            Create Post
          </Button>
        </Col>
      </ModalWindow>
    );
  };
  const templateAttachment = () => {
    let type;
    if (props?.chatContext?.hookChat?.attachItem) {
      type = props?.chatContext?.hookChat?.attachItem.type.split("/")[0];
    }
    return (
      <>
        {props?.chatContext?.hookChat?.attachItem ? (
          <div className="attachment show">
            <Row className="vr-start hr-between">
              <Col className="w-100">
                {type == "image" ? (
                  <Image
                    src={URL.createObjectURL(props?.chatContext?.hookChat.attachItem)}
                    alt={props?.chatContext?.hookChat.attachItem?.name}
                    width="300px"
                  />
                ) : (
                  <IconImage
                    path="IconDarkFiles.png"
                    style={{ className: "m-r-0-5" }}
                  />
                )}
                <Text className="m-t-0-5">
                  {props?.chatContext?.hookChat?.attachItem?.name}
                </Text>
              </Col>
              {props?.chatContext?.hookChat.streamLoading ? (
                <PortalLoader size="xs" />
              ) : (
                <></>
              )}
            </Row>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const templateSlashPreview = () => {
    const objs: any = {
      // 'post': <LayoutPostCard item={props?.chatContext?.hookChat?.chatMeta?.meta} />,
      // 'proposal': <LayoutProposalCard item={props?.chatContext?.hookChat?.chatMeta?.meta} />,
      nft: <LayoutNFTCard nft={props?.chatContext?.hookChat?.chatMeta?.meta} />,
      // '/send-payment': <LayoutTransactionCard meta={props?.chatContext?.hookChat?.chatMeta?.meta} />,
      // 'poll': <LayoutPollCard poll={props?.chatContext?.hookChat?.chatMeta?.meta} />
    };
    return objs[props?.chatContext?.hookChat?.chatMeta?.type];
  };

  const TemplatePreview = () => {
    return (
      <>
        {props?.chatContext?.hookChat?.actionMessage?.action == "REPLY" ||
        props?.chatContext?.hookChat?.attachItem ||
        props?.chatContext?.hookChat?.chatMeta?.type ||
        props?.chatContext?.hookChat?.slashCmd ||
        props?.chatContext?.hookChat?.mentionActive ? (
          <StyledChatPreview>
            <Row className="vr-center w-100 hr-between">
              <Heading as="h6" size="sm">
                Preview
              </Heading>
              <IconImage
                path="IconDarkCross.png"
                style={{ className: "m-r-0-5" }}
                onClick={() => previewCloseHandler()}
              />
            </Row>
            {templateReply()}
            {templateAttachment()}
            {templateSlashPreview()}
            {props?.chatContext?.hookChat?.mentionActive ? templateMention() : <></>}
            {/* {props?.chatContext?.hookChat.slashCmd ? (
                                <LayoutSlashPreview
                                    hookChat={props?.chatContext?.hookChat}
                                    handleTask={props.handleTask}
                                    txnModalOpen={props.txnModalOpen}
                                    slashCmds={props.slashCmds}
                                />
                                ) : (<></>)
                            } */}
          </StyledChatPreview>
        ) : (
          <></>
        )}
      </>
    );
  };

  const templateMention = () => {
    return (
      <ChatMention
        setMentionList={props?.chatContext?.hookChat.setMentionList}
        mentionList={props?.chatContext?.hookChat.mentionList}
        mention={props?.chatContext?.hookChat.mention}
        selectedText={props?.chatContext?.hookChat.selectedText}
      />
    );
  };

  const TemplateAction = () => {
    return (
      <Pop
        trigger={
          <StyledIcon className="circled">
            <PlusSquareIcon color="gray.300" />
          </StyledIcon>
        }
      >
        <Col className="text-start">
          <Button
            variant="transparent"
            size="md"
            className="text-start"
            isLoading={props.attachLoading}
            rightIcon={<IconImage path="IconDarkFiles.png" />}
          >
            <label htmlFor="upload-file" className="w-100">
              <Row className="vr-center hr-between w-100">Upload File </Row>
            </label>
          </Button>
          <input
            id="upload-file"
            onChange={props?.chatContext?.hookChat.handleAttachment}
            type="file"
            hidden
          />
          {/* TODO */}
          {/* <Button
            variant="transparent"
            size="md"
            className="text-start"
            rightIcon={<IconImage path="IconDarkFiles.png" />}
          >
            <Row className="hr-between w-100">Create Poll</Row>
          </Button> */}
          {/* <Button
            variant="transparent"
            size="md"
            className="text-start"
            rightIcon={<IconImage path="IconDarkFiles.png" />}
            onClick={modalPost.onOpen}
          >
            <Row className="hr-between w-100">Create Post</Row>
          </Button>
          <Button
            variant="transparent"
            size="md"
            className="text-start"
            rightIcon={<IconImage path="IconDarkWallet.png" />}
          >
            <Row className="hr-between w-100">Send Payment</Row>
          </Button> */}
        </Col>
      </Pop>
    );
  };

  const TemplateInput = () => {
    return (
      <StyledChatInputContainer>
        <Col className="w-100">
          <TemplatePreview />

          <StyledChatInput>
            <Col className="vr-center hr-center sideIcons">
              <TemplateAction />
            </Col>
            <Col className="w-100 vr-center">
              <Textarea
                onChange={event => {
                  event.target.style.height = "auto";
                  event.target.style.height = `${event.target.scrollHeight}px`;
                }}
                ref={props?.chatContext?.hookChat.textareaRef}
                className="inputElement"
                variant="unstyled"
                style={{ minHeight: "45px" }}
                onKeyDown={(event: any) => {
                  props?.chatContext?.hookChat?.keyDownMessage(event);
                }}
                placeholder="Message..."
                height="auto"
                rows={1}
              />
            </Col>
            <Col className="vr-center hr-center sideIcons">
              <span
                onClick={(e: any) => {
                  props?.chatContext?.hookChat?.keyDownMessage(e, true);
                }}
              >
                <IconImage path="IconDarkSend.svg" size="30" />
              </span>
            </Col>
          </StyledChatInput>
        </Col>
      </StyledChatInputContainer>
    );
  };

  const TemplateMembership = () => {
    return (
      <>
        <Col className="w-100 vr-center m-l-0-5">
          Join the Channel to Message
        </Col>
        <Col>
          <Button
            isLoading={props.isLoading}
            onClick={() => props.addMemberToChannel(props.channel?.id)}
          >
            Join
          </Button>
        </Col>
      </>
    );
  };

  const TemplateSearch = () => {
    return (
      <Row className="vr-center hr-between w-100">
        <IconImage path="IconDarkCalendar.png" />
        <Row className="vr-center">
          <IconImage
            path="IconDarkArrowUp.png"
            style={{ className: "m-r-0-5" }}
          />
          <IconImage path="IconDarkArrowDown.png" />
        </Row>
      </Row>
    );
  };

  const TemplateMultiselect = () => {
    return (
      <Row className="vr-center hr-between w-100">
        <IconImage path="IconDarkReply.png" style={{ className: "m-r-0-5" }} />
        <IconImage path="IconDarkDelete.png" style={{ className: "m-r-0-5" }} />
        <IconImage
          path="IconDarkForward.png"
          style={{ className: "m-r-0-5" }}
        />
      </Row>
    );
  };

  const previewCloseHandler = () => {
    if (props?.chatContext?.hookChat?.actionMessage?.action == "REPLY") {
      props?.chatContext?.hookChat?.handleReplyClose();
    } else if (props?.chatContext?.hookChat?.attachItem) {
      props?.chatContext?.hookChat?.deleteAttachment();
    }
  };

  const Template = () => {
    if (props?.chatContext?.hookChat.actionMessage?.action === "SEARCH")
      return (
        <StyledChatInputContainer>
          <StyledChatInput>
            <TemplateSearch />
          </StyledChatInput>
        </StyledChatInputContainer>
      );
    else if (props?.chatContext?.hookChat.actionMessage?.action === "MULTISELECT")
      return (
        <StyledChatInputContainer>
          <StyledChatInput>
            <TemplateMultiselect />
          </StyledChatInput>
        </StyledChatInputContainer>
      );
    else return <TemplateInput />;
  };

  return (
    <>
      <Template />
      <TemplatePostNew />
    </>
  );
};

export default ChatInput;
