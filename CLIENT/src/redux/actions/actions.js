import { constants } from './constants';
/* READY API WHICH WILL USE LIKE API.METHOD
  EXAMPLE : API.GET() API.POST() ...
*/
import { API } from '../../API/API';

export const showNote = () => {
  return {
    type: constants.SHOW_NOTE
  }
}


export const showCat = () => {
  return {
    type: constants.SHOW_CATEGORY
  }
}

export const hideNote = (data) => {
  return {
    type: constants.HIDE_NOTE
  }
}


export const hideCat = () => {
  return {
    type: constants.HIDE_CATEGORY
  }
}
/* THUNKS (GETSTATE AND DISPATCH AS ARGS) */

export const addNote = (data) => async (dispatch, getState) => {
  const response = await API.post('/notes/new', {
    ...data
  });
  console.log(response.data.data);
  dispatch({
    type: constants.NOTE_ADD_SUCCESS,
    payload: response.data.data
  });
}


export const fetchingNotes = () => async (dispatch, getState) => {
  dispatch({
    type: constants.FETCHING_NOTES
  });

  const response = await API.get('/notes');
  console.log(response.data);
  dispatch({
    type: "FETCH_NOTES_DONE",
    payload: response.data
  });
}

export const fetchingCat = () => async (dispatch, getState) => {
  const response = await API.get('/categories');
  console.log(response.data);
  dispatch({
    type: constants.FETCH_CAT_DONE,
    payload: response.data
  })
}

export const deleteNote = (id) => async (dispatch, getState) => {
  // will dispatch here deleting note action to show spinner on btn 
  dispatch({
    type:constants.DEL_NOTE
  })
  const response = await API.delete(`/notes/delete/${id}`);
  console.log(response.data);
  dispatch({
    type:constants.NOTE_DEL_SUCCESS,
    payload: id
  });
}

export const updateNote_set_item = (item) => {
  return {
    type: constants.SET_ITEM_TO_UPDATE,
    payload : item
  }
}

export const updateNote = (data) => async (dispatch , getState) =>{
  // HERE WE MUST DISPATCH UPDATING ACTION TO SHOW SPINNER
  console.log(data);
  const response = await API.put(`/notes/${data._id}`,{
    "title": data.title,
    "content" : data.content,
    "category" : data.category
  });

  console.log(response);

  dispatch({
    type:constants.NOTE_UPD_SUCCESS,
    payload: data
  })

}