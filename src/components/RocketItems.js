import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { rocket: { name, image, description } } = props;
  return (
    <div className="rocket-container">
      <div className="image-wrapper">
        <img alt="rocket" src={image} />
      </div>
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default RocketItem;
