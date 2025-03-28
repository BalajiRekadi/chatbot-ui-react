import axios from "axios"
import { DOMAIN } from "../../utils/constants"

const axiosInstance = axios.create({
  baseURL: DOMAIN,
  headers: { "ngrok-skip-browser-warning": "69420" },
})

export default axiosInstance
