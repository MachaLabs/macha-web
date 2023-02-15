import { createContext, useEffect, useMemo, useState } from "react";
import { logger } from "../helpers/logger";
import useLensAuth from "../hooks/lens/useLensAuth";
import { UserDb$ } from "../schema/user";
// import { removeAsyncData } from "../service/AsyncStorageService";
import { putStreamToken } from "../service/StreamService";
import { findOrCreateUser } from "../service/UserService";
import {useAccount, useConnect, useDisconnect} from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'

export type AuthContextType = {
    signer: any | undefined;
    address: any | undefined;
    connectWallet: () => void;
    disconnectWallet: () => void;
    user: any | undefined;
    setUser: (param: any) => void;
    updateUser: (...params: any) => void;
    streamClient: any | undefined;
    connectLens: () => void;
    authToken: any | undefined;
};

export const AuthContext = createContext<AuthContextType>({
    signer: null,
    address: "",
    connectWallet: () => {},
    disconnectWallet: () => {},
    user: null,
    setUser: (param) => {},
    updateUser: (...params) => {},
    streamClient: null,
    connectLens: () => {},
    authToken: null,
});

const AuthProvider = ({children}: any) => {
    const [signer, setSigner] = useState<any>("");
    // const [address, setAddress] = useState<any>();
    const [user, setUser] = useState<any>();
    const [streamClient, setStreamClient] = useState<any>();
    const {address, isConnected} = useAccount();

    //
    const updateUser = (key: any, data: any) => {
        logger('auth', 'updateUser', "Updating user data", [key, data]);
        const newData: any = {};
        newData[key] = data;
        setUser({...user, ...newData});
    };
    
    const hookLensAuth = useLensAuth(address, updateUser);
    const authToken = hookLensAuth.accessToken;
    // const {connect} = useConnect({
    //     connector: new InjectedConnector()
    // });


    const {disconnect} = useDisconnect();
    
    // connecting user wallet
    const connectWallet = async () => {
        logger('auth', 'connectWallet', 'Trigger connectWallet', []);
        
    };

    // Disconnecting user Wallet
    const disconnectWallet = async () => {
        disconnect();
    };

    const resetToDefault = () => {
        // the lens data in the useLensProfile should also be set to default
        // setAddress(null);
        setUser(null);
        hookLensAuth.setLensProfile(null);
    };

    const connectLens = () => {
        hookLensAuth.connect();
    };

    // setting the address in context

    useEffect(() => {
        logger('auth', 'useMemo[user.lens]', 'User is',  [user])
        if (address) {
            logger('auth', 'useEffect[user.lens]','requesting user from DB with address', [address])
            findOrCreateUser({
                address: address.toLowerCase(),
            }).then((data: any) => {
                logger('auth', 'useEffect[user.lens]', 'response of user from DB', [JSON.stringify(data)]);
                const userData = UserDb$(data);
                updateUser("db", userData);
                if (userData?.id && !userData.tokens?.stream) {
                    putStreamToken({userAddress: address}).then((res: any) => {
                        logger('auth', 'useEffect[user.db.id]', 'response from putStreamToken api', [res])
                        updateUser("db", UserDb$(res));
                    });
                }
            });
        }
    }, [address, user?.lens?.id]);

    // useMemo(() => {
    //     logger('auth', 'useEffect[user.db.id]', 'run', [])
    //     if (user?.db?.id && !user?.db?.tokens?.stream) {
    //         putStreamToken({userAddress: address}).then((res: any) => {
    //             logger('auth', 'useEffect[user.db.id]', 'response from putStreamToken api', [res])
    //             updateUser("db", UserDb$(res));
    //         });
    //     }
    //     // hookStreamClient.connectStreamClient();
    // }, [user?.db?.id]);

    return (
        <AuthContext.Provider
            value={{
                signer,
                address,
                connectWallet,
                disconnectWallet,
                user,
                setUser,
                updateUser,
                streamClient,
                connectLens,
                authToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
