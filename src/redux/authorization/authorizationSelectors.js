export const selectIsLoggedIn = state => state.authorization.isLoggedIn;

export const selectUser = state => state.authorization.user;

export const selectIsRefreshing = state => state.authorization.isRefreshing;