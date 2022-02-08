import Axios from 'axios';

const FETCH_MISSIONS = 'space-travelers/missions/FETCH_MISSIONS';

const initialState = [];

export const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
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

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
