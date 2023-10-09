import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
