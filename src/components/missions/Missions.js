import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsApi } from '../../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsApi());
  }, []);

  const missions = missionsData.map((item) => (
    <li className="mission" key={item.id}>
      <Mission mission={item} />
    </li>
  ));

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
