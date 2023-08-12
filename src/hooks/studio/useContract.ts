import { contractDataBySlug, contractsByUserAddress, deleteContract } from "@/service/ApiService";
import useContractFormStore from "@/store/useContractFormStore";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react"

const useContract = () => {

  const [contractDetails, setContractDetails] = useState<any>();
  const [userContracts, setUserContracts] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const toast = useToast();
  const router = useRouter()
  const $loadContractFormData = useContractFormStore((state: any) => state.loadContractFormData);

  const _fetch = async (contract_slug: any) => {
    if (window.sessionStorage !== undefined) {
      const data = window.sessionStorage.getItem(contract_slug);
      if (data !== null) {
        setContractDetails(JSON.parse(data))
        setIsLoading(false)
      }
      else {
        contractDataBySlug(contract_slug).then((res: any) => {
          window.sessionStorage.setItem(contract_slug, JSON.stringify(res.data))
          setContractDetails(res.data);
          setIsLoading(false)
        });
      }
    }
    else {
      contractDataBySlug(contract_slug).then((res: any) => {
        window.sessionStorage.setItem(contract_slug, res.data)
        setContractDetails(res.data);
        setIsLoading(false)
      });
    }
  };

  const _fetchEdit = async (contract_slug: any) => {
    contractDataBySlug(contract_slug).then((res: any) => {
      window.sessionStorage.setItem(contract_slug, JSON.stringify(res.data))
      setIsLoading(false)
      setContractDetails(res.data);
      $loadContractFormData(res.data.contract)
      $loadContractFormData({
        interested_events: res.data.contract.interested_events.join(),
      })
      $loadContractFormData({
        interested_methods: res.data.contract.interested_methods.join(),
      })
    });
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

  const _fetchUserContracts = async (userAddress: any) => {
    contractsByUserAddress(userAddress).then((res: any) => {
      if(res && res.data){
        setUserContracts(res.data)
      }
      else{
        setUserContracts(undefined)
      }
      setIsLoading(false)
    })
  }

  return {
    contractDetails: contractDetails,
    isLoading: isLoading,
    _fetch: _fetch,
    contractDelete: contractDelete,
    _fetchEdit: _fetchEdit,
    _fetchUserContracts: _fetchUserContracts,
    userContracts: userContracts
  }

}
export default useContract