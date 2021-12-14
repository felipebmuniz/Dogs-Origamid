import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { user } = useParams();
  return (
    <div>
      <Feed />
    </div>
  );
};

export default UserProfile;
