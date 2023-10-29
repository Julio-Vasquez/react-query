import axios, { AxiosInstance } from 'axios'

const BASE_URL_CONST = 'https://api.github.com/repos/facebook/react'
const TIMEOUT_CONST = 18000

const configAxios = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL_CONST,
    timeout: TIMEOUT_CONST,
    headers: {},
  })

  const onFulfilled = <T>(next: T) => {
    return Promise.resolve(next)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onRejected = (error: any) => {
    return Promise.reject(error)
  }

  axiosInstance.interceptors.response.use(onFulfilled, onRejected)

  return axiosInstance
}

export const Axios = configAxios()
