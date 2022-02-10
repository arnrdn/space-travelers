import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const {
    mission: {
      id, name, description, reserved,
    },
  } = props;

  const dispatch = useDispatch();

  return (
    <>
      <div className="mission-data">
        {name}
      </div>
      <div className="mission-data">
        {description}
      </div>
      <div className="mission-data">
        {!reserved
        && <p className="mission-active non-m">NOT A MEMBER</p>}
        {reserved
        && <p className="mission-active m">Active Member</p>}
      </div>
      <div className="mission-data">
        {!reserved
          && (
          <button
            className="btn-m mission-join"
            type="button"
            onClick={() => dispatch(joinMission(id))}
          >
            Join Mission
          </button>
          )}
        {reserved
          && (
          <button
            className="btn-m mission-leave"
            type="button"
            onClick={() => dispatch(leaveMission(id))}
          >
            Leave Mission
          </button>
          )}
      </div>
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
