import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Landing from './Components/Landing';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
