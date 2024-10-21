import { createStore, combineReducers } from 'redux';
import vStatusReducer from './reducers/vStatusReducer';

const rootReducer = combineReducers({
  vStatus: vStatusReducer, // Add other reducers here if needed
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For using Redux DevTools
);

export default store;
