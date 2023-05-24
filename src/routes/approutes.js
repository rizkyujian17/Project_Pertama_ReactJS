import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Sholat from '../pages/sholat';
import Contact from '../pages/contact';
import Register from '../pages/register';
import Login from '../pages/login';
 
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sholat" element={<Sholat/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
  
}
  
export default AppRouter