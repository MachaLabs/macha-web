import { logger } from "@/helpers/logger";
import { XmtpMessage$ } from "@/schema/message";
import useChatChannelStore from "@/store/useChatChannelStore";
import { DecodedMessage, SortDirection } from "@xmtp/xmtp-js";
import { useEffect, useState } from "react";

const useXmtpChannelMessages = () => {
  //console.log('Rendering >>>>> useXmtpChannelMessages');
  const [messages, setMessages] = useState<DecodedMessage[]>([]);
  const [messagesLogs, setMessagesLogs] = useState<any>();
  const $channel = useChatChannelStore((state: any) => state.channel);

  const _fetch = async (channel: any) => {
    logger('xmtp', 'useXmtpChannelMessages._fetch', 'channel of xmtp', [channel]);
    const messages = await channel?.xmtpRaw?.messages({
      direction: SortDirection.SORT_DIRECTION_ASCENDING,
    });
    const messagesData = messages?.map((item: any) => {
      return XmtpMessage$(item);
    });
    logger('xmtp', 'XMTPProvider._loadMessages', 'Messages is', [messagesData])
    setMessages(messagesData);
  }

  const _watch = async (channel: any) => {
    //console.log('Rendering >>>>>>> useXmtpChannelMessages._watch', channel?.xmtpRaw)
    const logs = await channel?.xmtpRaw?.streamMessages();
    setMessagesLogs(logs);

    if (logs) {
      for await (const msg of logs) {
        //console.log(`New message from ${msg.senderAddress}: ${msg.content}`)
        setMessages(prevMessages => {
          const messages = [...prevMessages];
          messages.push(XmtpMessage$(msg));
          return messages;
        });
      }
    }
  }

  useEffect(() => {
    if ($channel && $channel.source == 'xmtp') {
      messagesLogs?.return();
      _watch($channel)
    } 
  }, [$channel])

  return (
    {
      fetch: _fetch,
      messages: messages
    }
  )
}

export default useXmtpChannelMessages;