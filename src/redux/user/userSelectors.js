const getIsLoggedIn = state => state.user.isLoggedIn;
const getUserName = state => state.user.user.name;
const getToken = state => state.user.token;
const getIsFetching = state => state.user.isFetching;

const userSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getIsFetching,
};

export default userSelectors;
