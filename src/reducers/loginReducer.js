const initialState = {
    username: '',
    password: '',
    loggedIn: false,
    error: '',
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          loggedIn: true,
          error: '',
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  