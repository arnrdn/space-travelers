import React from 'react';
import MissionsProfile from './missions/MissionsProfile';
import RocketProfile from './rockets/RocketProfile';
import '../styling/MyProfile.css';

const MyProfile = () => (
  <div className="active-container">
    <div className="profile-info">
      <MissionsProfile />
      <RocketProfile />
    </div>
  </div>
);

export default MyProfile;
