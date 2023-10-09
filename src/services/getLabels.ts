export type Labels = {
  id: string
  node_id: string
  url: string
  name: string
  color: string
  default: boolean
  description: string | null
}

export const getLabels = async (): Promise<Labels[]> => {
  const res = await fetch('https://api.github.com/repos/facebook/react/labels')

  const data = await res.json()
  return data
}
