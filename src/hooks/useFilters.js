import { useQuery } from "@tanstack/react-query"
import axiosInstance from "../app/axios/axios"

const initialPayload = {
  company_name: [],
  agency_name: [],
  year: [],
  site_name: [],
  fei_number: [],
}

const fetchFilters = async () => {
  const res = await axiosInstance.post("/get_filters", initialPayload)
  res.data.fei_number = res.data?.fei_number?.filter(Boolean)
  return res.data
}

const useFilters = () => {
  const { data = initialPayload, isFetching } = useQuery({
    queryKey: ["filters"],
    queryFn: () => fetchFilters(),
  })
  return {
    data,
    isFetching,
  }
}

export default useFilters
