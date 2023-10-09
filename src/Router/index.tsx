import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '../routes'

export default function Router() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
