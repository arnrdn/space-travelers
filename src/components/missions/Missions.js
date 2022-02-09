import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsApi } from '../../redux/missions/missions';
import Mission from './Mission';
import './Missions.css';

const Missions = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  const missions = missionsData.map((item) => (
    <li className="mission" key={item.id}>
      <Mission mission={item} />
    </li>
  ));

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissionsApi());
    }
  }, []);

  return (
    <div className="missions-container">
      <ul className="missions-cols">
        <li className="mission-col">
          Mission
        </li>
        <li className="mission-col">
          Description
        </li>
        <li className="mission-col">
          Status
        </li>
        <li className="mission-col">
          /
        </li>
      </ul>
      <ul className="missions">
        {missions}
      </ul>
    </div>
  );
};

export default Missions;
