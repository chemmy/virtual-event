import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserState } from "./user.reducer";

export const selectUser = (state: AppState) => state.user;
export const selectVisibility = createSelector(
  selectUser,
  (state: UserState) => state.visibility,
);
export const selectImage = createSelector(
  selectUser,
  (state: UserState) => state.imageUrl,
);
export const selectUploading = createSelector(
  selectUser,
  (state: UserState) => state.uploading,
);