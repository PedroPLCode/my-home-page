export const getOriginAirport = (state) => state.originAirport;

const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_ORIGIN_AIRPORT = createActionName('UPDATE_ORIGIN_AIRPORT');

export const updateOriginAirport = payload => ({ type: UPDATE_ORIGIN_AIRPORT, payload });

const originAirportReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_ORIGIN_AIRPORT:
        return action.payload
      default:
        return statePart;
    }
  }

export default originAirportReducer;