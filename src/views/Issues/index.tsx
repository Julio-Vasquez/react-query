import { Outlet } from 'react-router-dom'
import { useGetLabels } from '../../hooks/useGetLabels'

export default function Issues() {
  const { data } = useGetLabels()
  console.log(data)
  return (
    <>
      <h1>
        Git Issues <small>Seguimiento de problemas</small>
      </h1>
      <Outlet />
    </>
  )
}
