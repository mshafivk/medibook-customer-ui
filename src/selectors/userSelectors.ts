import { createSelector } from "reselect";

const selectRegister = (state: any) => state.user;

export const selectLoading = createSelector(
  [selectRegister],
  (user) => user.loading
);

export const selectError = createSelector(
  [selectRegister],
  (user) => user.error
);
