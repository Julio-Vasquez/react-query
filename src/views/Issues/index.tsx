import { Outlet } from 'react-router-dom'

export default function Issues() {
  return (
    <>
      <h1>
        Git Issues <small>Seguimiento de problemas</small>
      </h1>
      <Outlet />
    </>
  )
}
