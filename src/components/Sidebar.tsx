import React, { useState } from 'react';
import DefaultImage from '../assets/images/dafault-image.jpg';
import '../assets/css/stylesheet.css';
import { FaUserFriends } from 'react-icons/fa';


interface SidebarProps {
  conversations: Conversation[];
  setOpenChatId: (id: string | null) => void;
}

interface Conversation {
  id: string;
  name: string;
  photo?: string;
  isGroup: boolean;
  deleted?: boolean;
  open?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ conversations, setOpenChatId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [conversationsState, setConversationsState] = useState(conversations);
  const [hoveredConversationId, setHoveredConversationId] = useState<string | null>(null);
  const [hoveredFriends, setHoveredFriends] = useState(false); // New state for Friends hover

  const handleConversationClick = (id: string) => {
    setOpenChatId(id);
    setConversationsState(prevState =>
      prevState.map(conversation => ({
        ...conversation,
        open: conversation.id === id,
      }))
    );
  };

  const handleConversationClose = (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    const updatedConversations = conversationsState.map(conversation => {
      if (conversation.id === id) {
        return {
          ...conversation,
          deleted: true,
        };
      }
      return conversation;
    });
    setOpenChatId(null);
    setConversationsState(updatedConversations);
  };

  const handleFriendsClick = () => {
    setHoveredFriends(prevState => !prevState);
  };

  const filteredConversations = conversationsState.filter(conversation => {
    const name = conversation.name.toLowerCase();
    return name.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="sidebar">
      <div
        className={`sidebar-header ${hoveredFriends ? 'hover-effect' : ''}`}
        onClick={handleFriendsClick}
        onMouseEnter={() => setHoveredFriends(true)}
        onMouseLeave={() => setHoveredFriends(false)}
      >
        <h3>
          <FaUserFriends size={24} className="icon" /> Friends
        </h3>
      </div>
      <div className="sidebar-search">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search conversations..."
          className="search-bar"
        />
      </div>
      <div className="conversations-list">
        {filteredConversations.map(conversation => {
          if (conversation.deleted) {
            return null;
          }
          return (
            <div
              className={`conversation ${conversation.open ? 'open' : ''}`}
              key={conversation.id}
              onClick={() => handleConversationClick(conversation.id)}
              onMouseEnter={() => setHoveredConversationId(conversation.id)}
              onMouseLeave={() => setHoveredConversationId(null)}
            >
              <div className="conversation-info">
                <div className="conversation-photo">
                  {conversation.photo ? (
                    <img src={conversation.photo} alt={conversation.name} />
                  ) : (
                    <img src={DefaultImage} alt="Default" />
                  )}
                </div>
                <div className="conversation-name">{conversation.name}</div>
                <div className="conversation-close" onClick={event => handleConversationClose(event, conversation.id)}>
                  {hoveredConversationId === conversation.id ? 'X' : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;