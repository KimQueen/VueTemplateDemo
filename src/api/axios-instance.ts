import axios, { AxiosInstance } from 'axios'

const axiosInstances: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  timeout: 30 * 1000
})

export interface ApiResult<T> {
  code: number
  message: string
  result: T
}

export async function post<T>(url: string, params?: any): Promise<ApiResult<T>> {
  const response = await axiosInstances.post<ApiResult<T>>(url, { ...params })
  return response.data
}

export async function get<T>(url: string, params?: any): Promise<ApiResult<T>> {
  const response = await axiosInstances.get<ApiResult<T>>(url, { ...params })
  return response.data
}

export async function put<T>(url: string, params?: any): Promise<ApiResult<T>> {
  const response = await axiosInstances.put<ApiResult<T>>(url, { ...params })
  return response.data
}

export async function del<T>(url: string, params?: any): Promise<ApiResult<T>> {
  const response = await axiosInstances.delete<ApiResult<T>>(url, { ...params })
  return response.data
}
