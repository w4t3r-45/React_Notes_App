import {constants} from './constants';
/* READY API WHICH WILL USE LIKE API.METHOD
  EXAMPLE : API.GET() API.POST() ...
*/
import {API} from '../../API/API';

export const showNote = ()=>{
  return{
    type:constants.SHOW_NOTE
  }
}


export const showCat = ()=>{
  return{
    type:constants.SHOW_CATEGORY
  }
}

export const hideNote = () =>{
  return {
    type:constants.HIDE_NOTE
  }
}


export const hideCat = () =>{
  return {
    type:constants.HIDE_CATEGORY
  }
}

/* THUNKS (GETSTATE AND DISPATCH AS ARGS) */

export const addNote = async  (dispatch , getState) =>{
    // wil do put request to the api
}