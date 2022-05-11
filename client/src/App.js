import React from 'react';
import { Container } from './components';
import Home from './pages/Home';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </Container>
  );
}

export default App;
