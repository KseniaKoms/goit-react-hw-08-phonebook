const getIsLoggedIn = state => state.isLoggedIn;
const getUserName = state => state.user.name;

const userSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default userSelectors;
