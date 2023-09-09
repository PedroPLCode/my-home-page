export const getStartDate = (state) => state.startDate;

const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_START_DATE = createActionName('UPDATE_START_DATE');

export const updateStartDate = payload => ({ type: UPDATE_START_DATE, payload });

const startDateReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_START_DATE:
        return action.payload
      default:
        return statePart;
    }
  }

export default startDateReducer;