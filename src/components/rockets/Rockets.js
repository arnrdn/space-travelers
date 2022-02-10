import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketItem from './RocketItems';
import { fetchRocketApi } from '../../redux/rockets/rockets';
import '../../styling/rocket.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocketApi());
    }
  }, [dispatch]);
  return (
    <div className="rockets-display-container">
      {
        rockets.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))
      }
    </div>
  );
};

export default Rockets;
