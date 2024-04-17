import React from "react"
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  const Logout = ()=>{
    localStorage.clear()
    return <Navigate to='/login' />
  }

  const RegisterAndLogout = ()=>{
    localStorage.clear()
    return <Register />
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/register" element={<RegisterAndLogout />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
