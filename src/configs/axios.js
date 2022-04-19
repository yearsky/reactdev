import axios from "axios"

import errorHandler from "./errorHandler"

const instance = axios.create({
  baseURL: `https://api.bintangteknik.id/api/`,
  timeout: 10000
})

instance.interceptors.response.use((response) => response.data, errorHandler)

export { default as setAuthorizationHeader } from "./setAuthorizationHeader"

export default instance
