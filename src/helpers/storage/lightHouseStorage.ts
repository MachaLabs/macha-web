// import lighthouse from "@lighthouse-web3/sdk";
import { config } from "@/config/index";

export const progressCallback = (progressData: any) => {
  // let percentageDone: any = 100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
  console.log(progressData);
};

export const deploytoLightHouse = async (e: any, progressCallback: any) => {
  // const output = await lighthouse.upload(
  //   e,
  //   config.LIGHTHOUSE_API_KEY,
  //   false,
  //   progressCallback
  // );
  // console.log("File Status:", output);
  // console.log(
  //   "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
  // );
  return null;
};

export const uploadTextToLighthouse = async (text: string) => {
  // const response = await lighthouse.uploadBuffer(
  //   text,
  //   config.LIGHTHOUSE_API_KEY
  // );
  // console.log("https://gateway.lighthouse.storage/ipfs/" + response.data.Hash);
  return null;
};

export const displayImage = (cid: string | null) => {
  return cid ? `https://gateway.lighthouse.storage/ipfs/${cid}` : null;
};
