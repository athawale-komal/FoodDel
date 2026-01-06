// ...existing code...
import React from 'react'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Header from './Components/Header'
import Login from './Components/Login'
import Home from './Pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
