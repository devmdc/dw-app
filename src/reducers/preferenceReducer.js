const INITIAL_STATE = {
  dataPos: [],
  dataLoc: [],
};

function preference(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'JP_SET_DATA_POS':
      return {
        ...state,
        dataPos: action.data,
      };
    case 'JP_SET_DATA_LOC':
      return {
        ...state,
        dataLoc: action.data,
      };
    case 'JP_EMPTY_DATA':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default preference;
