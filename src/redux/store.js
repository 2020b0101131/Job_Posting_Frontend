import { createStore, combineReducers } from 'redux';
import vStatusReducer from './reducers/vStatusReducer';

const rootReducer = combineReducers({
  vStatus: vStatusReducer, 
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

export default store;
