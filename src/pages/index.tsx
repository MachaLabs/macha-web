import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Main from "./Main";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/StyledChakraTheme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <main className={styles.main}>
          <Main />
        </main>
      </ChakraProvider>
    </>
  );
}
