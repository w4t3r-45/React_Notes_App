import { constants } from '../actions/constants';

const INIT_STATE = {
  showNote: false,
  showCat: false,
  items: [],
}

export const mainReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.SHOW_NOTE:
      return {
        ...state, showNote: true
      };
    case constants.SHOW_CATEGORY:
      return {
        ...state, showCat: true
      }
    case constants.HIDE_NOTE:
      return {
        ...state, showNote: !state.showNote
      }
    case constants.HIDE_CATEGORY:
      return {
        ...state, showCat: !state.showCat
      }
    /* I STOPPED HERE WHEN I WAS ADDING NEW NOTE WILL DO NODE JS AND BACK */
    case constants.ADD_NOTE:
      return {
        ...state, items: [...state.items, action.payload]
      }
    default:
      return state;
  }
}