import Axios from 'axios';

const FETCH_MISSIONS = 'space-travelers/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers/missions/LEAVE_MISSION';

const initialState = [];

export const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const fetchMissionsApi = () => async (dispatch) => {
  const request = await Axios.get('https://api.spacexdata.com/v3/missions');
  const response = request.data;
  const missions = [];
  response.map((resp) => {
    const id = resp.mission_id;
    const name = resp.mission_name;
    const { description } = resp;
    const mission = { id, name, description };
    return missions.push(mission);
  });
  dispatch(fetchMissions(missions));
};

export const joinMissionApi = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) return mission;
    return { ...mission, reserved: true };
  });
  return newState;
};

export const leaveMissionApi = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) return mission;
    return { ...mission, reserved: false };
  });
  return newState;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return joinMissionApi(state, action.payload);
    case LEAVE_MISSION:
      return leaveMissionApi(state, action.payload);
    default:
      return state;
  }
};

export default missionsReducer;
