import { useQuery } from '@tanstack/react-query'
import { getRandomNumber } from '../services/getRandomNumber'

const queryKey = 'randomNumber'

export const useFetchRQ = () => {
  const query = useQuery([queryKey], getRandomNumber)
  return {
    loading: query.isFetching,
    error: query.isError && (query.error as string),
    randomNumber: query.data,
    refetch: query.refetch,
  }
}
