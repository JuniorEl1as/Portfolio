import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import App from './App'
import SobreMim from './pages/sobreMim'
import Projetos from './pages/projetos'
import Contatos from './pages/contatos'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/Home', element: <Home />},
      {path: '/Sobremim', element: <SobreMim />},
      {path: '/projetos', element: <Projetos />},
      {path: '/contatos', element: <Contatos />},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)