import useAuthStore from "@/store/useAuthStore";
import usePublisherFormStore from "@/store/usePublisherFormStore";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useMacha from "./useMacha";

const usePublisherCreate = (modal: any) => {
  const toast = useToast();
  const [formStep, setFormStep] = useState<any>(1);
  const [publisherType, setPublisherType] = useState<any>(undefined);
  const $address = useAuthStore((state: any) => state.address);
  const [isTransactionPending,setIsTransactionPending] = useState<any>(false);
  const $publisherFormData = usePublisherFormStore(
    (state: any) => state.publisherFormData
  );
  const $loadPublisherFormData = usePublisherFormStore(
    (state: any) => state.loadPublisherFormData
  );
  const hookMacha = useMacha();

  useEffect(() => {
    if ($address != null) $loadPublisherFormData({ address: $address });
  }, [$address]);

  const setClear = () => {
    setFormStep(1);
    setPublisherType(undefined);
    $loadPublisherFormData({
      name: "",
      email: "",
      logo: "",
      website: "",
    });
  };

  const selectPublisher = (type: string) => {
    setPublisherType(type);
  };

  const validateSteps = () => {
    if (formStep == 4) {
      if (publisherType == undefined) {
        return false;
      } else {
        return true;
      }
    } else if (formStep == 5 && publisherType == "Individual") {
      if (
        $publisherFormData.name == "" ||
        $publisherFormData.name == undefined ||
        $publisherFormData.address == "" ||
        $publisherFormData.address == undefined ||
        $publisherFormData.email == "" ||
        $publisherFormData.email == undefined
      ) {
        return false;
      } else {
        return true;
      }
    } else if (formStep == 5 && publisherType == "Organization") {
      if (
        $publisherFormData.name == "" ||
        $publisherFormData.name == undefined ||
        $publisherFormData.address == "" ||
        $publisherFormData.address == undefined ||
        $publisherFormData.logo == "" ||
        $publisherFormData.logo == undefined ||
        $publisherFormData.website == "" ||
        $publisherFormData.website == undefined
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const nextFormStep = () => {
    if (formStep >= 7) {
      return;
    } else {
      if (validateSteps()) {
        setFormStep((currentStep: any) => currentStep + 1);
      } else {
        toast({
          title: "Required fields cannot be empty",
          status: "warning",
          duration: 3000,
          position: "top-right",
        });
        return;
      }
    }
  };

  const prevFormStep = () => {
    if (formStep <= 1) {
      return;
    } else {
      setFormStep((currentStep: any) => currentStep - 1);
    }
  };

  const createPublisher = async () => {
    if (publisherType == "Individual") {
      let publisherPayload = {
        name: $publisherFormData.name,
        address: $publisherFormData.address,
        email: $publisherFormData.email,
        id: "",
        image: "",
        ipfsCid: "",
        type: "Individual",
      };
      if (
        publisherPayload.name == undefined ||
        publisherPayload.name == "" ||
        publisherPayload.address == undefined ||
        publisherPayload.address == "" ||
        publisherPayload.email == undefined ||
        publisherPayload.email == ""
      ) {
        toast({
          title: "Required fields cannot be empty",
          status: "warning",
          duration: 3000,
          position: "top-right",
        });
      } else {
        console.log("The publisher payload data is ", publisherPayload);
        setIsTransactionPending(true)
        toast({
          title: "Please wait for the transaction to confirm",
          status: "loading",
          duration: 5000,
          position: "top-right",
        });
        hookMacha.createMachaPublisher(publisherPayload).then((res: any) => {
          setIsTransactionPending(false);
          console.log(res)
          if(res?.code){
            toast({
              title: res.code.code || res?.code,
              status: "error",
              duration: 5000,
              position: "top-right",
            });
          }
          else{
            nextFormStep()
          }
        })
      }
    } else if (publisherType == "Organization") {
      let publisherPayload = {
        name: $publisherFormData.name,
        address: $publisherFormData.address,
        image: $publisherFormData.logo,
        email: "",
        id: "",
        ipfsCid: "",
        type: "Organization",
      };
      if (
        publisherPayload.name == undefined ||
        publisherPayload.name == "" ||
        publisherPayload.address == undefined ||
        publisherPayload.address == "" ||
        publisherPayload.name == undefined ||
        publisherPayload.name == "" ||
        publisherPayload.image == undefined ||
        publisherPayload.image == ""
      ) {
        toast({
          title: "Required fields cannot be empty",
          status: "warning",
          duration: 3000,
          position: "top-right",
        });
      } else {
        console.log("The publisher payload data is ", publisherPayload);
        setIsTransactionPending(true)
        toast({
          title: "Please wait for the transaction to confirm",
          status: "loading",
          duration: 5000,
          position: "top-right",
        });
        hookMacha.createMachaPublisher(publisherPayload).then((res: any) => {
          setIsTransactionPending(false);
          if(res?.code){
            toast({
              title: res.code,
              status: "error",
              duration: 5000,
              position: "top-right",
            });
          }
          else{
            nextFormStep()
          }
        })
      }
    }
  };

  return {
    createPublisher: createPublisher,
    formStep: formStep,
    nextFormStep: nextFormStep,
    prevFormStep: prevFormStep,
    publisherType: publisherType,
    selectPublisher: selectPublisher,
    $address: $address,
    setClear: setClear,
    $publisherFormData: $publisherFormData,
    $loadPublisherFormData: $loadPublisherFormData,
    isTransactionPending: isTransactionPending
  };
};
export default usePublisherCreate;