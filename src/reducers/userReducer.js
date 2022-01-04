const INITIAL_STATE = {
  isFetching: false,
  firstTime: true,
  data: {},
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'USER_SET_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'USER_SET_PROFILE':
      return {
        ...state,
        data: {...state.data, email: action.email, whatsapp: action.whatsapp},
      };
    case 'USER_EMPTY_DATA':
      return {
        ...state,
        data: {},
      };
    case 'USER_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'USER_STOP':
      return {
        ...state,
        isFetching: false,
      };
    case 'SET_NOT_FIRST_TIME':
      return {
        ...state,
        firstTime: false,
      };
    default:
      return state;
  }
}

export default user;
