import { combineReducers } from 'redux';

export const CREATE_TODO = 'CREATE_TODO';
export const GET_TODOS = 'GET_TODOS';

const todos = (state = [], action) => {
  switch (action.type) {
  	case CREATE_TODO:
  	//cant change state, immutable
  	  return [
  	    action.payload, ...state
  	  ];
    case GET_TODOS:
      return action.payload;

  	default:
  	  return state;
  }
};

export const reducer = combineReducers({todos})