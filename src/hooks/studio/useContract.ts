import { contractDataBySlug, deleteContract } from "@/service/ApiService";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"

const useContract = () => {

  const [contractDetails, setContractDetails] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const toast = useToast();
  const router = useRouter()

  const _fetch = async (contract_slug: any) => {
    if (window.localStorage !== undefined) {
      const data = window.localStorage.getItem(contract_slug);
      if (data !== null) {
        console.log("local data", JSON.parse(data))
        setContractDetails(JSON.parse(data))
        setIsLoading(false)
      }
      else {
        contractDataBySlug(contract_slug).then((res: any) => {
          console.log("contract fetching", res.data);
          window.localStorage.setItem(contract_slug,JSON.stringify(res.data))
          setIsLoading(false)
          setContractDetails(res.data);
        });
      }
    }
    else {
      contractDataBySlug(contract_slug).then((res: any) => {
        console.log("contract fetching", res.data);
        window.localStorage.setItem(contract_slug,res.data)
        setIsLoading(false)
        setContractDetails(res.data);
      });
    }
  };

  const contractDelete = async (contract_id: any) => {
    deleteContract(contract_id).then((res: any) => {
      console.log("contract deleting", res.data);
      toast({
        title: "Contract Deleted!!",
        status: "success",
        duration: 3000,
        position: "top-right"
      });
      router.push('/')
    });
  };

  return {
    contractDetails: contractDetails,
    isLoading: isLoading,
    _fetch: _fetch,
    contractDelete: contractDelete
  }

}
export default useContract