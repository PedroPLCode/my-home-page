export const getDestinationAirport = (state) => state.searchString;

const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_DESTINATION_AIRPORT = createActionName('UPDATE_DESTINATION_AIRPORT');

export const updateDestinationAirport = payload => ({ type: UPDATE_DESTINATION_AIRPORT, payload });

const destinationAirportReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_DESTINATION_AIRPORT:
        return action.payload
      default:
        return statePart;
    }
  }

export default destinationAirportReducer;