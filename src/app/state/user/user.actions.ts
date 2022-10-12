import { createAction, props } from '@ngrx/store';

export const UPDATE_VISIBILITY = '[Profile] Update Visibility';
export const UPDATE_IMAGE = '[Profile] Update Image';
export const UPLOAD_IMAGE = '[Profile] Upload Image';

export const updateVisibility = createAction(
  UPDATE_VISIBILITY,
  props<{ visibility: boolean }>()
);

export const updateImage = createAction(
  UPDATE_IMAGE,
  props<{ imageUrl: string }>()
);

export const uploadImage = createAction(
  UPLOAD_IMAGE,
  props<{ file: File }>()
);
