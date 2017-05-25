const LOAD = 'redux-example/detail/LOAD';
const LOAD_SUCCESS = 'redux-example/detail/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/detail/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function detail(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.detail && globalState.detail.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/product/detail/param1/param2')
  };
}
