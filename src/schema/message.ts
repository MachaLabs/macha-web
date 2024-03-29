import { DecodedMessage } from "@xmtp/xmtp-js";

export const StreamMessage$ = (data: any) => {
  return {
    id: data?.id,
    text: data?.text,
    created_at: data?.created_at,
    createdBy: data?.createdBy?.toLowerCase(),
    peerAddress: undefined,
    attachments: data?.attachments,
    pinned: data?.pinned,
    reaction_scores: data?.reaction_scores,
    reaction_count: data?.reaction_count,
    user: data?.user,
    own_reactions: data?.own_reactions,
    quoted_message: data?.quoted_message
  };
};
export const XmtpMessage$ = (data: any) => {
  return {
    id: data?.topic,
    text: data?.content,
    created_at: data?.sent,
    createdBy: data?.senderAddress.toLowerCase(),
    peerAddress: data?.conversation.peerAddress,
    attachments: data?.attachments,
    user: {
      id: data.senderAddress.toLowerCase()
    },
    content: data?.content,
    contentTopic: data?.contentTopic,
    contentType: data?.contentType,
    conversation: data?.conversation,
    sent: data?.sent,
    messageVersion: data?.messageVersion,
    quoted_message: data?.quoted_message,
    senderAddress: data?.quoted_message,
  };
};
