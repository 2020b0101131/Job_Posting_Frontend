const initialState = null; // Initial state for vStatus (can be any default value)

const vStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VSTATUS':
      return action.payload;
    case 'RESET_VSTATUS':
      return null; // Reset to null or any other default value
    default:
      return state;
  }
};

export default vStatusReducer;
