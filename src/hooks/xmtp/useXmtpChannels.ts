import { logger} from "@/helpers/logger";
import { AuthContext } from "@/providers/AuthProvider";
import { Channel$ } from "@/schema/channel";
import { useContext, useEffect, useState } from "react";
import useLensProfileList from "../lens/useLensProfileList";

const useXmtpChannels = () => {
    const authContext = useContext(AuthContext);
    const [allConversations, setAllConversations] = useState<any>();
    const [xmtpConvo, setXmtpConvo] = useState<any>();

    const hookLensProfileList = useLensProfileList();

    const _listen = async() => {
      for await (const conversation of xmtpConvo) {
        console.log("New conversation started with ", conversation);
        setAllConversations((prevConversations: any) => {
          const conversations = [...prevConversations];
          conversations.push(new Channel$('xmtp', conversation));
          return conversations;
        })
      }
    }

    useEffect(() => {
      const streamConversations = async() => {
        const xmtpNew = await authContext?.xmtpClient?.conversations?.stream();
        console.log("New xmtpConvo ", xmtpNew);
        setXmtpConvo(xmtpNew);
      }
      streamConversations();
    }, [])

    useEffect(() => {
      if (xmtpConvo) {
        _listen();
      }
    }, [xmtpConvo]);

    useEffect(() => {
      if (allConversations?.length) {
        allConversations.map(async (item: any) => {
          const peer = await hookLensProfileList.fetch(item.peerAddres);
          item.updatePeerLens(peer);
          console.log("Useeffect xmtp lens ", peer, item);
        })
      }
    }, [allConversations])

    const _fetch = async () => {
        const conversationList = await authContext?.xmtpClient?.conversations?.list();
        const data = conversationList?.map((item: any) => {
          // const peer = hookLensProfileList.fetch(item.peerAddress);
          // console.log("useXmtpChannels peer", ChannelXMTP$({...item, peer: peer}));
          return new Channel$("xmtp", item);
        });
        logger('xmtp', 'useXmtpChannels._fetch', 'channels from xmtp', [data])
        setAllConversations(data);
      };



    return (
        {
            fetch: _fetch,
            channels: allConversations
        }
    )
}

export default useXmtpChannels;