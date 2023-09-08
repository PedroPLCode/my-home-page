import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import originAirportReducer from './originAirportReducer';
import destinationAirportReducer from './destinationAirportReducer';
import startDateReducer from './startDateReducer';
import endDateReducer from './endDateReducer';
import searchResponseReducer from './searchResponseReducer';

const subreducers = {
  originAirport: originAirportReducer,
  destinationAirport: destinationAirportReducer,
  startDate: startDateReducer,
  endDate: endDateReducer,
  searchResponse: searchResponseReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;