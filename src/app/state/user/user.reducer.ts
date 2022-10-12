import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/types/User";
import { updateImage, updateVisibility } from "./user.actions";

export interface UserState {
  details: User;
  visibility: boolean;
  imageUrl: string;
}

export const initialState: UserState = {
  details: {
    name: 'Sarah Patricia Sarahson',
    role: 'SVP, Occam Lab Pte Ltd',
    email: 'Sarah.Patricia@tlf.com',
    timezone: '(UTC+08:00) Kuala Lumpur, Singapore',
  },
  visibility: false,
  imageUrl: '',
}

export const userReducer = createReducer(
  initialState,
  on(updateVisibility, (state, { visibility }) => ({ ...state, visibility })),
  on(updateImage, (state, { imageUrl }) => ({ ...state, imageUrl })),
);
