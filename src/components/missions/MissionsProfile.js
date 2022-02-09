import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const missionsData = useSelector((state) => state.missionsReducer);

  const activeMissions = missionsData.filter((mission) => mission.reserved);

  const displayActiveMissions = activeMissions.map((mission) => (
    <li
      className="active-mission"
      key={mission.id}
    >
      {mission.name}
    </li>
  ));

  return (
    <div className="missions-profile-container">
      <ul className="active-mission-list">
        <li>
          My Missions
          <ul className="active-missions">
            {activeMissions.length === 0 ? (<p>No active missions yet!</p>)
              : displayActiveMissions}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MissionsProfile;
