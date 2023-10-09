import { useEffect, useState } from 'react'

import { getLabels, Labels } from '../services/getLabels'

interface State {
  loading: boolean
  data: Labels[] | undefined
  error: string | undefined
}

export const useGetLabels = () => {
  const [data, setData] = useState<State>({
    loading: true,
    data: [],
    error: undefined,
  })

  useEffect(() => {
    getLabels()
      .then(label => setData({ ...data, loading: false, data: label }))
      .catch((err: Error) =>
        setData({ ...data, error: err.message, loading: false })
      )
  }, [])

  return { ...data }
}
