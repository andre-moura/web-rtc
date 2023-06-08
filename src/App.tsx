import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  const userRole = 'admin';
  const isLoggedIn = false;
  const navbarOptions = [
    { label: 'Home', roles: [], loggedIn: false, link: '/home' },
    { label: 'Login', roles: [], loggedIn: false, link: '/login' },
    { label: 'Register', roles: [], loggedIn: false, link: '/register' }
  ];

  return (
    <Router>
      <Navbar options={navbarOptions} userRole={userRole} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;