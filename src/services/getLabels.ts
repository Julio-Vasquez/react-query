import { Axios } from '../api/api.config'
import { Sleep } from '../utils/sleep'

export type Labels = {
  id: string
  node_id: string
  url: string
  name: string
  color: string
  default: boolean
  description?: string | null
}

export const getLabels = async (): Promise<Labels[]> => {
  const res = await fetch('https://api.github.com/repos/facebook/react/labels')
  const data: Labels[] = await res.json()
  return data
}

export const getLabelsAxios = async (): Promise<Labels[]> => {
  await Sleep()
  const { data } = await Axios.get<Labels[]>('/labels')

  return data
}
