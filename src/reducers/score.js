import * as types from '@src/actions/types';

const initialState = {
  bestScore: 0,
}

function score(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_BEST_SCORE:
      return Object.assign({}, state, { bestScore: action.payload });

    default:
      return state;
  }
}

export default score;
