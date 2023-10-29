import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getLabels, getLabelsAxios, Labels } from '../services/getLabels'

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

const queryKey = 'labels'

export const useGetLabelsRQ = () => {
  const labels = useQuery([queryKey], getLabelsAxios, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  })

  return {
    loading: labels.isFetching,
    error: labels.isError && (labels.error as string),
    refetch: labels.refetch,
    labels: labels.data,
    queryKey,
  }
}

/**
 * isLoading se usa cuando no tenemos nada en cache, osea la primera petición
 * isFetching siempre q se haga una petición
 
 */
