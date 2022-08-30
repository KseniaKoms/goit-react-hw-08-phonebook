const getIsLoggedIn = state => state.user.isLoggedIn;
const getUserName = state => state.user.user.name;

const userSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default userSelectors;
