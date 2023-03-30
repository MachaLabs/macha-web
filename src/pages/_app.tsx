import AuthProvider from "@/providers/AuthProvider";
import { ChatProvider } from "@/providers/ChatProvider";
import StreamProvider from "@/providers/StreamProvider";
import "@/styles/globals.css";
import theme from "@/styles/StyledChakraTheme";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { IKContext } from "imagekitio-react";
import type { AppProps } from "next/app";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "bootstrap/dist/css/bootstrap.min.css";
import { XmtpProvider } from "@/providers/XmtpProvider";
import { DataProvider } from "@/providers/DataProvider";
import { config } from "@/config/index";


const { chains, provider } = configureChains(
  [polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "MetaWork",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  console.log('Rendering >>>>> APP');
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${config.GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${config.GOOGLE_ANALYTICS_ID}');`}
      </Script>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <IKContext urlEndpoint="https://ik.imagekit.io/metaworkLabs">
            <AuthProvider>
              <StreamProvider>
                <XmtpProvider>
                  <ChatProvider>
                    <DataProvider>
                      <ChakraProvider theme={theme}>
                        <Component {...pageProps} />
                      </ChakraProvider>
                    </DataProvider>
                  </ChatProvider>
                </XmtpProvider>
              </StreamProvider>
            </AuthProvider>
          </IKContext>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
