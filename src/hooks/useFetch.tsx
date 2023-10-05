import { useEffect, useState } from 'react'
import { getRandomNumber } from '../services/getRandomNumber'

interface State {
  loading: boolean
  randomNumber: number | undefined
  error: string | undefined
}

export const useFetch = () => {
  const [data, setData] = useState<State>({
    loading: true,
    randomNumber: undefined,
    error: undefined,
  })

  const refetch = () => {
    setData({
      randomNumber: Math.floor(Math.random() * 500) + 1,
      error: undefined,
      loading: false,
    })
  }

  useEffect(() => {
    getRandomNumber()
      .then(num => setData({ ...data, loading: false, randomNumber: num }))
      .catch((err: Error) =>
        setData({ ...data, error: err.message, loading: false })
      )
  }, [])

  return { ...data, refetch }
}
