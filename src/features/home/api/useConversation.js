import { useQuery } from "@tanstack/react-query"

const fetchFilters = async () => {
  // const res = await axiosInstance.post("/get_filters")
  // res.data.fei_number = res.data?.fei_number?.filter(Boolean)
  return [{}]
}

const useFilters = () => {
  const { data = [], isFetching } = useQuery({
    queryKey: ["filters"],
    queryFn: () => fetchFilters(),
  })
  return {
    data,
    isFetching,
  }
}

export default useFilters
