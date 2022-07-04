const REQUEST_ROBOTS_PENDING = 'robofriends/src/redux/REQUEST_ROBOTS_PENDING';
const REQUEST_ROBOTS_SUCCESS = 'robofriends/src/redux/REQUEST_ROBOTS_SUCCESS';
const REQUEST_ROBOTS_FAILED = 'robofriends/src/redux/REQUEST_ROBOTS_FAILED';

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
};

const requestRobotsReducer = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

export default requestRobotsReducer;
