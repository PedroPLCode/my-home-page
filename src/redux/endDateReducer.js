export const getEndDate = (state) => state.endDate;

const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_END_DATE = createActionName('UPDATE_END_DATE');

export const updateEndDate = payload => ({ type: UPDATE_END_DATE, payload });

const endDateReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_END_DATE:
        return action.payload
      default:
        return statePart;
    }
  }

export default endDateReducer;