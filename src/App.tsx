import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Chat from './components/Chat';


function App() {
  const [openChatId, setOpenChatId] = useState<string | null>(null);
  const conversations = [
    { id: '1', name: 'Friend 1', photo: 'friend1.jpg', isGroup: false },
    { id: '2', name: 'Friend 2', isGroup: false },
    { id: '3', name: 'Group 1', isGroup: true },
    // Add more conversations as needed
  ];
  const userRole = 'admin';
  const isLoggedIn = false;
  const navbarOptions = [
    { label: 'Home', roles: [], loggedIn: false, link: '/home' },
    { label: 'Login', roles: [], loggedIn: false, link: '/login' },
    { label: 'Register', roles: [], loggedIn: false, link: '/register' }
  ];

  return (
    <Router>
      <div className="app-container">
        <Sidebar conversations={conversations} setOpenChatId={setOpenChatId} />
        {/* <Navbar options={navbarOptions} userRole={userRole} isLoggedIn={isLoggedIn} /> */}
        <Chat conversationId={openChatId} />
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;