export const handleUserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
