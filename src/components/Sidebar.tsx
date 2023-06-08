import React, { useState } from 'react';
import DefaultImage from '../assets/images/dafault-image.jpg';
import '../assets/css/stylesheet.css';

interface SidebarProps {
  conversations: Conversation[];
}

interface Conversation {
  id: string;
  name: string;
  photo?: string;
  isGroup: boolean;
  deleted?: boolean; // New property to track deleted conversations
}

const Sidebar: React.FC<SidebarProps> = ({ conversations }) => {
  const [filteredConversations, setFilteredConversations] = useState<Conversation[]>(conversations);
  const [openConversations, setOpenConversations] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = conversations.filter(conversation =>
      conversation.name.toLowerCase().includes(searchTerm)
    );
    setFilteredConversations(filtered);
  };

  const handleConversationToggle = (id: string) => {
    if (openConversations.includes(id)) {
      setOpenConversations(prevOpenConversations =>
        prevOpenConversations.filter(conversationId => conversationId !== id)
      );
    } else {
      setOpenConversations(prevOpenConversations => [...prevOpenConversations, id]);
    }
  };

  const handleConversationDelete = (id: string) => {
    const updatedConversations = filteredConversations.map(conversation => {
      if (conversation.id === id) {
        return { ...conversation, deleted: true };
      }
      return conversation;
    });
    setFilteredConversations(updatedConversations);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 onClick={() => handleConversationDelete('friends')}>Friends</h3>
      </div>
      <div className="sidebar-search">
        <input type="text" placeholder="Search" onChange={handleSearchChange} />
      </div>
      <div className="conversations-list">
        {filteredConversations.map(conversation => {
          if (conversation.deleted) {
            return null; // Skip rendering deleted conversations
          }
          return (
            <div className="conversation" key={conversation.id}>
              <div
                className={`conversation-info ${openConversations.includes(conversation.id) ? 'open' : ''}`}
                onMouseEnter={() => handleConversationToggle(conversation.id)}
                onMouseLeave={() => handleConversationToggle(conversation.id)}
              >
                <div className="conversation-photo">
                  {conversation.photo ? (
                    <img src={conversation.photo} alt={conversation.name} />
                  ) : (
                    <img src={DefaultImage} alt="Default" />
                  )}
                </div>
                <div className="conversation-name">{conversation.name}</div>
                {openConversations.includes(conversation.id) && (
                  <div className="conversation-close" onClick={() => handleConversationDelete(conversation.id)}>
                    X
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;