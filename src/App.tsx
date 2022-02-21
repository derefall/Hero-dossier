import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './components/Container';

import Home from './pages/Home/index'

function App() {
  
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
