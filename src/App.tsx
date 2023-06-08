import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';

function App() {
  const userRole = 'admin';
  const isLoggedIn = false;
  const navbarOptions = [
    { label: 'Home', roles: [], loggedIn: false, link: '/home' },
    { label: 'Login', roles: [], loggedIn: false, link: '/login' },
    { label: 'Register', roles: [], loggedIn: false, link: '/register' }
  ];

  const conversations = [
    { id: '1', name: 'Friend 1', photo: 'friend1.jpg', isGroup: false },
    { id: '2', name: 'Group 1', isGroup: true },
    // Add more conversations as needed
  ];

  return (
    <Router>
      <Sidebar conversations={conversations}/>
      {/* <Navbar options={navbarOptions} userRole={userRole} isLoggedIn={isLoggedIn} /> */}
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;