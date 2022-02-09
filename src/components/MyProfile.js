import React from 'react';
import MissionsProfile from './missions/MissionsProfile';
import RocketProfile from './rockets/RocketProfile';

const MyProfile = () => (
  <div className="active-container">
    <div className="missions-section">
      <MissionsProfile />
      <RocketProfile />
    </div>
  </div>
);

export default MyProfile;
