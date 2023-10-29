/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate } from 'react-router-dom'

export const Paths = {
  fetch: '/simple-fetch',
  redirect: '/',
  'not-found': '*',
  issues: {
    path: '/issues',
    children: { list: 'list', issue: 'issue/:id', redirect: '*' },
  },
}

const lazy = async (path: string) => {
  const { default: Component } = await import(path)
  return Component ?? <></>
}

export const router = createBrowserRouter([
  {
    path: Paths.fetch,
    lazy: async () => ({ Component: await lazy('./views/Fetch') }),
  },
  {
    path: Paths.issues.path,
    lazy: async () => ({ Component: await lazy('./views/Issues') }),
    children: [
      {
        path: Paths.issues.children.list,
        lazy: async () => ({
          Component: await lazy('./views/Issues/ListIssues'),
        }),
      },
      {
        path: Paths.issues.children.issue,
        lazy: async () => ({
          Component: await lazy('./views/Issues/Issue'),
        }),
      },
      {
        path: Paths.issues.children.redirect,
        element: <Navigate to={Paths.issues.children.list} />,
      },
    ],
  },

  { path: Paths.redirect, element: <Navigate to={Paths.fetch} /> },
  { path: Paths['not-found'], element: <h1>Not Found</h1> },
])
