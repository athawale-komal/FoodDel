import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Header from './Components/Header'
import Login from './Components/Login'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
  
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    </Routes>
  
    </BrowserRouter>
    <div>App
    </div>
    </>
  )
}

export default App