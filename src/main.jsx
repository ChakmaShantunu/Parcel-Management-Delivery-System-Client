import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-bg urbanist max-w-11/12 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
