import React from 'react';
import { Container } from './components';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </Container>
  );
}

export default App;
