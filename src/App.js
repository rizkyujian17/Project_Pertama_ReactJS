import React from 'react';
import './App.css';
import AppRouter from './routes/approutes';
import BaseNavbar from './layouts/navbar';
import MyFooter from './layouts/footer';
function App() {
  return (
    <>
    <BaseNavbar/>
    <AppRouter/>
    <MyFooter/>
    </>
  );
}

export default App;
