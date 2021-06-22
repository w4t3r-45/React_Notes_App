import { constants } from '../actions/constants';

const INIT_STATE = {
  showNote: false,
  showCat: false,
  note_spinner: false,
  update_note:false,
  cat_spinner: false,
  note_btn_spinner:false,
  del_btn_spinner : false ,
  notes: [],
  current_note_data: {},
  categories: [],
}

export const mainReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.SHOW_NOTE:
      return {
        ...state, showNote: true , update_note:false
      };
    case constants.SHOW_CATEGORY:
      return {
        ...state, showCat: true
      }
    case constants.HIDE_NOTE:
      return {
        ...state, showNote: !state.showNote , update_note : false , update_note:false
      }
    case constants.HIDE_CATEGORY:
      return {
        ...state, showCat: !state.showCat
      }
    /* I STOPPED HERE WHEN I WAS ADDING NEW NOTE WILL DO NODE JS AND BACK */
    case constants.ADD_NOTE:
      return {
        ...state, notes: [...state.notes, action.payload]
      }
    case constants.FETCHING_NOTES:
      return {
        ...state, note_spinner: true
      }
    case constants.FETCH_NOTES_DONE:
      return {
        ...state, notes: [...action.payload], note_spinner: false
      }
    case constants.FETCHING_CAT:
      return {
        ...state, cat_spinner: true
      }
    case constants.FETCH_CAT_DONE:
      return {
        ...state, categories: [...action.payload] , cat_spinner : false 
      }
    case constants.ADD_NOTE:
      return {
        ...state , note_btn_spinner : true
      }
    case constants.NOTE_ADD_SUCCESS:
      return{
        ...state , notes : [...state.notes , action.payload]
      }
    case constants.DEL_NOTE:
      return{
        ...state , del_btn_spinner : true
      }
    case constants.NOTE_DEL_SUCCESS :
      console.log("deleting " , action.payload);
      return {
        ...state , notes  :state.notes.filter(item => item._id !== action.payload)
      }
    case constants.SET_ITEM_TO_UPDATE:
      return {
        ...state , current_note_data : {...action.payload} ,update_note:true
      }
    case constants.NOTE_UPD_SUCCESS:
      return {
        ...state , notes : state.notes.map(item => item._id === action.payload._id ? {
            ...action.payload
        } : item)
      }

    default:
      return state;
  }
}