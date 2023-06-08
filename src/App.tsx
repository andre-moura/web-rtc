import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  const [openChatId, setOpenChatId] = useState<string | null>(null);
  const conversations = [
    { id: '1', name: 'Friend 1', photo: 'friend1.jpg', isGroup: false },
    { id: '2', name: 'Group 1', isGroup: true },
    // Add more conversations as needed
  ];

  return (
    <Router>
      <div className="app-container">
        <Sidebar conversations={conversations} setOpenChatId={setOpenChatId} />
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