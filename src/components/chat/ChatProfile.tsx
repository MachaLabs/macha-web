import useLensProfileUpdate from "@/hooks/lens/useLensProfileUpdate";
import usePortalChannel from "@/hooks/portal/usePortalChannel";
import LayoutCardPannel from "@/layouts/LayoutCardPannel";
import LayoutInputs from "@/layouts/options/LayoutInputs";
import { Row } from "@/styles/StyledComponents";
import { Avatar, Button, Heading, Text } from "@chakra-ui/react";

const ChatProfile = (props: any) => {
  const hookPortalChannel = usePortalChannel(props?.channel);
  const data = [
    {
      label: "Name",
      value: hookPortalChannel?.channel?.name,
      onChangeText: (text: any) => {
        hookPortalChannel?.setChannel({
          ...hookPortalChannel?.channel,
          name: text,
        });
      },
    },
    {
      label: "Description",
      value: hookPortalChannel?.channel?.description,
      onChangeText: (text: any) => {
        hookPortalChannel?.setChannel({
          ...hookPortalChannel?.channel,
          description: text,
        });
      },
    },
  ];
  return (
    <LayoutCardPannel
      header={
        <Row className="hr-between v-center">
          <Text>New Channel</Text>
          <Button
            onClick={() => {
              hookPortalChannel?.update();
            }}
            variant="state-brand"
            size="sm"
          >
            Create New
          </Button>
        </Row>
      }
    >
      <Row className="hr-center w-100 m-b-1">
        <Avatar size="2xl" />
      </Row>
      <LayoutInputs data={data} style={{ class: "m-b-1" }} />
    </LayoutCardPannel>
  );
};
export default ChatProfile; 
