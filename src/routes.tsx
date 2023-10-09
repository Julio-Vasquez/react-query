/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import { lazyLoad } from './utils/lazy-load'

const SimpleFetch = lazyLoad('./views/Fetch')
const ListIssues = lazyLoad('./views/Issues/ListIssues')
const Issue = lazyLoad('./views/Issues/Issue')
const Issues = lazyLoad('./views/Issues')

export const Paths = {
  fetch: '/simple-fetch',
  redirect: '/',
  'not-found': '*',
  issues: {
    path: '/issues',
    children: { list: 'list', issue: 'issue/:id', redirect: '*' },
  },
}

const fetchObj: RouteObject = {
  element: <SimpleFetch />,
  path: Paths.fetch,
}

const issuesObj: RouteObject = {
  path: Paths.issues.path,
  element: <Issues />,
  children: [
    { path: Paths.issues.children.list, element: <ListIssues /> },
    { path: Paths.issues.children.issue, element: <Issue /> },
    {
      path: Paths.issues.children.redirect,
      element: <Navigate to={Paths.issues.children.list} />,
    },
  ],
}

const notFoundObj: RouteObject = {
  path: Paths['not-found'],
  element: <h1>Not Found</h1>,
}

export const router = createBrowserRouter([
  fetchObj,
  issuesObj,
  {
    path: Paths.redirect,
    element: <Navigate to={Paths.fetch} />,
  },
  notFoundObj,
])
