import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { mission: { name, description } } = props;

  return (
    <>
      <div className="mission-data">
        {name}
      </div>
      <div className="mission-data">
        {description}
      </div>
      <div className="mission-data">
        Not a member
      </div>
      <div className="mission-data">
        <button className="join-leave" type="button">
          Join mission
        </button>
      </div>
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Mission;
