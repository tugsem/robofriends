const SEARCH_FIELD = 'robofriends/src/redux/SEARCH_FIELD';

const initialState = {
  searchField: '',
};

export const setSearchField = (payload) => ({
  type: SEARCH_FIELD,
  payload,
});

const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export default searchRobots;
