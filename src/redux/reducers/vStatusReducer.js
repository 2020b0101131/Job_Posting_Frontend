const initialState = null; 

const vStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VSTATUS':
      return action.payload;
    case 'RESET_VSTATUS':
      return null; 
    default:
      return state;
  }
};

export default vStatusReducer;
