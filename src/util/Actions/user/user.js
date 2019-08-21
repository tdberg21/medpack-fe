export const userLogin = user => ({
  type: 'LOGIN',
  user,
});

export const userLogout = () => ({
  type: 'LOGOUT',
});
