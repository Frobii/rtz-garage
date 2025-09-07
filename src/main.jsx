import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ProductProvider } from './features/product/ProductContext.jsx'
import './index.css'
import router from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>,
)
