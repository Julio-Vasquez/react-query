import { lazy } from 'react'

export const lazyLoad = (path: string) => {
  const Component = lazy(() => import(`../${path}`))

  return Component ?? <></>
}
