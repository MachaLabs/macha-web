import { Data } from "aws-sdk/clients/firehose";
import { AnyAaaaRecord } from "dns";

export const ChannelDb$ = (data: any) => {
  return {
    id: data?._id,
    type: data?.type,
    name: data?.name,
    orgId: data?.orgId,
    private: data?.private,
    users: data?.users,
    admins: data?.admins,
    createdBy: data?.createdBy,
    created_at: data?.createdAt,
    updated_at: data?.updatedAt,
    permissions: data?.permissions,
    image: "",
    lastMessage: "",
    membersCount: 0,
    notificationCount: 0,
    pinnedMessages: data?.state?.pinnedMessages
  };
};

export const ChannelStream$ = (data: any, raw?: any, owner?: any) => {
  return {
    id: data?.id,
    type: data?.type,
    name: data?.name,
    description: data?.description,
    orgId: data?.orgId,
    private: data?.private,
    users: data?.users,
    admins: data?.admins,
    isAdmin:
      String(data?.created_by?.id)?.toLowerCase() == String(owner)?.toLowerCase(),
    createdBy: data?.created_by?.id,
    created_at: data?.created_at,
    updated_at: data?.updated_at,
    permissions: data?.own_capabilities,
    image: "",
    unreadCountObject: raw?.state?.read ? raw?.state?.read : 0,
    lastMessage:
      raw?.state?.messageSets[0]?.messages[
        raw?.state?.messageSets[0]?.messages?.length - 1
      ],
    membersCount: data?.member_count,
    notificationCount: 0,
    raw: raw,
    pinnedMessages: raw?.state?.pinnedMessages
  };
};

export const ChannelXMTP$ = (data: any) => {
  return {
    id: data?.peerAddress?.toLowerCase(),
    type: data?.type,
    name: data?.peerAddress?.toLowerCase(),
    orgId: data?.orgId,
    private: data?.private,
    users: data?.users,
    admins: data?.admins,
    createdBy: data?.createdBy?.toLowerCase(),
    created_at: data?.createdAt,
    updated_at: data?.updatedAt,
    permissions: data?.permissions,
    image: "",
    lastMessage: "",
    membersCount: 0,
    notificationCount: 0,
    unreadCountObject: {},
    send: data.send,
    xmtpRaw: data,
    pinnedMessages: data?.state?.pinnedMessages,
    peer: data?.peer
  };
};

export class Channel$ {
  source: String;
  data: any;
  raw: any;
  xmtpRaw: any;
  type: any;
  id: any;
  name: any;
  description: any;
  image: any;
  private: any;
  isAdmin: any;
  admins: any;
  users: any;
  orgId: any;
  permissions: any;
  lastMessage: any;
  membersCount: any;
  notificationCount: any;
  unreadCountObject: any;
  createdBy: any;
  created_at: any;
  updated_at: any;
  pinnedMessages: any;
  send: any;
  peer: any;
  peerAddress: any;

  constructor(
    source: string = "",
    data: any = null
  ) {
    this.source = source;
    switch(this.source) {
      case "xmtp": 
        this.setFromXmtp(data)
        break;
      case "getstream":
        this.setFromStream(data);
        break;
    }
  }

  setFromStream (data: AnyAaaaRecord) {

  }

  setFromXmtp (data: any) {
    this.id= data?.peerAddress?.toLowerCase();
    this.type= data?.type;
    this.name= data?.peerAddress?.toLowerCase();
    this.orgId= data?.orgId;
    this.private= data?.private;
    this.users= data?.users;
    this.admins= data?.admins;
    this.createdBy= data?.createdBy?.toLowerCase();
    this.created_at= data?.createdAt;
    this.updated_at= data?.updatedAt;
    this.permissions= data?.permissions;
    this.image= "";
    this.lastMessage= "";
    this.membersCount= 0;
    this.notificationCount= 0;
    this.unreadCountObject= {};
    this.send= data.send;
    this.xmtpRaw= data;
    this.pinnedMessages= data?.state?.pinnedMessages,
    this.peer= data?.peer,
    this.peerAddress= data?.peerAddress
  }

  updatePeerLens (user: any) {
    this.data = {...this.data, peer: user}
  }
}