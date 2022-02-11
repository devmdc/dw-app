const INITIAL_STATE = {
  isFetching: false,
};

function vacancy(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'VACANCY_FETCH':
      return {
        ...state,
        isFetching: action.data,
      };
    default:
      return state;
  }
}

export default vacancy;
