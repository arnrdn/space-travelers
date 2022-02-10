import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rockets/rockets';
import '../../styling/rocket.css';

const RocketItem = (props) => {
  const {
    rocket: {
      id, name, image, description, reserved,
    },
  } = props;
  const dispatch = useDispatch();
  const reserveCancelRocket = () => {
    dispatch(bookRocket(id));
  };
  return (
    <div className="rocket-container">
      <img alt="rocket" src={image} className="rocket-img" />
      <div className="rocket-details">
        <h2 className="rocket-title">{name}</h2>
        <p className="rocket-description">
          {reserved && (
          <span className="rocket-reserved">
            Reserved
          </span>
          )}
          {' '}
          {description}
        </p>
        {!reserved && (
          <button type="button" className="rocket-reserve-btn" onClick={reserveCancelRocket}>Reserve Rocket</button>
        )}
        {reserved && (
          <button type="button" className="rocket-cancel-btn" onClick={reserveCancelRocket}>Cancel Reservation</button>
        )}
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;
