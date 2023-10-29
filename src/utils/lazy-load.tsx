import { lazy } from 'react'

export const lazyLoad = (path: string) => {
  const component = lazy(() => import(`../${path}`))

  return component ?? <></>
}
