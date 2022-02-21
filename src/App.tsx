import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';

import CharacterId from './pages/CharacterId/index';
import Home from './pages/Home/index'

function App() {
  
  return (
    <BrowserRouter>      
      <Container>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/characters/:id" element={<CharacterId />}/>
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
