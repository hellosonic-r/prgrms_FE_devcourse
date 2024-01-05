import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export type MODAL_VIEWS =
  | 'INIT_VIEW'
  | 'POST_EDIT_VIEW'
  | 'POST_DETAIL_VIEW'
  | 'TAG_CREATE_VIEW'
  | 'CHANNEL_SELECT_VIEW';

export type MODAL_ACTION =
  | {
      type: 'OPEN_MODAL';
      props?: any;
    }
  | {
      type: 'CLOSE_MODAL';
    }
  | {
      type: 'SET_MODAL_VIEW';
      view: MODAL_VIEWS;
    };

const initialState = {
  displayModal: false,
  modalView: 'INIT_VIEW',
  props: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalReducer(state, action: PayloadAction<MODAL_ACTION>) {
      switch (action.payload.type) {
        case 'OPEN_MODAL': {
          return {
            ...state,
            props: action.payload.props,
            displayModal: true,
          };
        }
        case 'CLOSE_MODAL': {
          return {
            ...state,
            props: null,
            displayModal: false,
          };
        }
        case 'SET_MODAL_VIEW': {
          return {
            ...state,
            props: null,
            modalView: action.payload.view,
          };
        }
      }
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
