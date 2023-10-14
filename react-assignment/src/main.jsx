import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Owner from './Owner.jsx'
import User from './User.jsx'
import Admin from './Admin.jsx'
import { FormDataProvider } from './FormDataContext.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <App/>},
  { path: '/owner', element: <Owner/>},
  { path: '/user', element: <User/>},
  { path: '/admin', element: <Admin/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormDataProvider>
    <RouterProvider router={router}/>
    </FormDataProvider>
  </React.StrictMode>
)
