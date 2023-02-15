import {config} from "../../config";
import {AuthContext, AuthContextType} from "../../providers/AuthProvider";
import {useContext, useEffect, useRef, useState} from "react";
import {StreamChat} from "stream-chat";
// import {storeAsyncData, getAsyncData} from "../../service/AsyncStorageService";
// import messaging from "@react-native-firebase/messaging";
import { logger } from "../../helpers/logger";

const useStreamClient = () => {
    const authContext = useContext(AuthContext) as AuthContextType;
    const [client, setClient] = useState<any>();
    const unsubscribeTokenRefreshListenerRef = useRef<() => void>();

    
    const connectToStream = async () => {
        console.log("Calling empty body of connectToStream");
        try {
            if (client?.user) {
                client.disconnect();
            }
            const newClient = StreamChat.getInstance(`${config.STREAM_APIKEY}`);
            logger('stream', 'connectToStream', 'StreamAuth Step 1', [newClient]);

            await newClient.connectUser(
                {
                    id: authContext.address.toLowerCase(),
                    lensId: authContext?.user?.lens?.id,
                    lensImage: authContext?.user?.lens?.image,
                    lensUsername: authContext.user?.lens?.name,
                    lensHandle: authContext?.user?.lens?.handle,
                    dbId: authContext?.user?.db?.id,
                },
                authContext?.user?.db?.tokens?.stream
            );
            setClient(newClient);
        } catch (e) {
            logger('stream', 'connectToStream', 'Error in setting the stream client', [e]);
        }
    };

    return {
        client: client,
        connectToStream: connectToStream,
    };
};
export default useStreamClient;
