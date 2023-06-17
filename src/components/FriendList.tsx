import React from 'react';

interface FriendListProps {
  open: boolean;
}

const FriendList: React.FC<FriendListProps> = ({ open }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="friend-list">
      <h3>Friend List</h3>
      {/* Friend List section */}
      <div className="friend-section">
        {/* Add friend list content here */}
      </div>

      <h3>Pending Friend Requests</h3>
      {/* Pending Friend Requests section */}
      <div className="friend-section">
        {/* Add pending friend requests content here */}
      </div>

      <h3>Blocked Users</h3>
      {/* Blocked Users section */}
      <div className="friend-section">
        {/* Add blocked users content here */}
      </div>
    </div>
  );
};

export default FriendList;