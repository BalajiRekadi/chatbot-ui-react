import { useMutation } from "@tanstack/react-query"
import axiosInstance from "../../../app/axios/axios"

const fetchAnswer = async (payload) => {
  const res = await axiosInstance.post(
    payload.isSearchMode ? "/search" : "/answer_sop_docs",
    { query: payload.query }
  )
  if (res.data?.answer?.content) {
    return { answer: res.data?.answer?.content, status: "success" }
  }
  return { answer: "No Data Found!", status: "error" }
}

const useAnswer = () => {
  const {
    mutateAsync: getAnswer,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (payload) => fetchAnswer(payload),
    onSuccess: () => {},
  })

  return {
    getAnswer: getAnswer,
    isPending,
    isError,
    isSuccess,
  }
}

export default useAnswer
