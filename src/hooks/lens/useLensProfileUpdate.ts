import { makeFileObjects } from "./../../helpers/storage/web3storage";
import { profile } from "console";
import { logger } from "@/helpers/logger";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { setMetaData } from "@/helpers/lens/lens";
import { v4 as uuidv4 } from "uuid";
import { fetchSigner, signTypedData } from "@wagmi/core";
import signedTypeData, { splitSignature } from "@/helpers/lens/lensApiService";
import { LensHubAbi } from "@/contracts/lens/lensHubContractAbi";
import { LENS_HUB_CONTRACT } from "@/helpers/lens/lensContract";
import { ethers } from "ethers";
const useLensProfileUpdate = () => {
  const [isLoading, setIsLoading] = useState<any>(false);
  const [loadingText, setLoadingText] = useState<any>("Sending Request");
  const [userLens, setUserLens] = useState<any>();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    logger(
      "lens",
      "useLensProfileUpdate.useEffect[authContext.user?.lens]",
      "lens data",
      [authContext.user?.lens]
    );
    setUserLens(authContext.user?.lens);
  }, [authContext.user?.lens]);
  console.log("userLens", userLens);

  const updateLensProfile = async () => {
    const cid = await makeFileObjects({
      name: userLens?.name,
      bio: userLens?.bio,
      ownedBy: userLens?.ownedBy,
      handle: userLens?.handle,
      version: "2.0.0",
      metadata_id: uuidv4(),
      attributes: userLens?.attributes,
      cover_picture: userLens?.cover_picture,
    });

    console.log("cid", `ipfs://${cid}`);

    const metadata = await setMetaData(userLens?.id, cid);
    const typedData =
      metadata.data!.createSetProfileMetadataTypedData.typedData;

    const signature = await signedTypeData(
      typedData.domain,
      typedData.types,
      typedData.value
    );

    const { v, r, s } = splitSignature(signature);
    const signer: any = await fetchSigner();

    const lensHub = new ethers.Contract(LENS_HUB_CONTRACT, LensHubAbi, signer);
    const tx = await lensHub.setProfileMetadataURIWithSig({
      profileId: typedData.value.profileId,
      contentURI: typedData.value.contentURI,
      sig: {
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      },
    });
    const receipt = await tx.wait();
    console.log("Tx receipt:", receipt);
  };
  return {
    isLoading: isLoading,
    loadingText: loadingText,
    userLens: userLens,
    setUserLens: setUserLens,
    updateLensProfile: updateLensProfile,
  };
};
export default useLensProfileUpdate;
