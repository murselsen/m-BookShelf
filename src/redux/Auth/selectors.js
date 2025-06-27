export const selectIsLoggedIn = state => state.auth.isLogged;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectAuthError = state => state.auth.error;
