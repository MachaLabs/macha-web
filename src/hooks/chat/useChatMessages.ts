import { DataContext } from "@/providers/DataProvider";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import useStreamChannelMessages from "../stream/useStreamChannelMessages";
import useXmtpChannelMessages from "../xmtp/useXmtpChannelMessages";

const useChatMessages = () => {
    const router = useRouter();
    let hookStreamChannelMessages = useStreamChannelMessages();
    let hookXmtpChannelMessages = useXmtpChannelMessages();
    const dataContext = useContext(DataContext);

    useEffect(() => {
        if (router.pathname == '/chat')
            dataContext.loadMessages(hookStreamChannelMessages?.messages || []);
    }, [router.pathname, hookStreamChannelMessages?.messages]);

    useEffect(() => {
        if (router.pathname == '/chat/dm')
            dataContext.loadMessages(hookXmtpChannelMessages?.messages || []);
    }, [router.pathname, hookXmtpChannelMessages?.messages]);


    return (
        {
            messages: dataContext.messages
        }
    )

}

export default useChatMessages;