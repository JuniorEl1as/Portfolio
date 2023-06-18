import { AuthContextProvedor } from './context'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header'

function App() {
  return (
    <AuthContextProvedor>
      <Header />
      <Outlet />
    </AuthContextProvedor>
  )
}

export default App