const getIsLoggedIn = state => state.user.isLoggedIn;
const getUserName = state => state.user.user.name;

const useSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default useSelectors;
