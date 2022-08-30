const getIsLoggedIn = state => state.isLoggedIn;
const getUserName = state => state.name;

const userSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default userSelectors;
