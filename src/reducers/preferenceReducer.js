const INITIAL_STATE = {
  dataPos: [],
  dataLoc: [],
};

function preference(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'JP_INIT_POS':
      return {
        ...state,
        dataPos: action.data,
      };
    case 'JP_INIT_LOC':
      return {
        ...state,
        dataLoc: action.data,
      };
    case 'JP_SET_DATA_POS':
      var newData = [];
      if (action.data.check) {
        newData = [...state.dataPos, action.data];
      } else {
        newData = state.dataPos.filter(e => e.id !== action.data.id);
      }

      return {
        ...state,
        dataPos: newData,
      };
    case 'JP_SET_DATA_LOC':
      var newData = [];
      if (action.data.check) {
        newData = [...state.dataLoc, action.data];
      } else {
        newData = state.dataLoc.filter(e => e.id !== action.data.id);
      }

      return {
        ...state,
        dataLoc: newData,
      };
    case 'JP_EMPTY_DATA':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default preference;
