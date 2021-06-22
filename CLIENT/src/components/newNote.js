import React, { useEffect } from 'react';
import { Message, Form, TextArea, Input, Dropdown, Button, Icon } from 'semantic-ui-react';
import styles from './styles/newNote.module.css';
import { hideNote } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingCat, addNote , updateNote } from '../redux/actions/actions';

export default function NewNote() {

  /* REDUX */
  const dispatch = useDispatch();

  /* HANDLERS */
  var inpData = {
    "title": "",
    "category": "",
    "content": ""
  };

  

  const inpHandler = (event) => {
    inpData = {
      ...inpData, [event.target.name]: event.target.value
    }
    console.log(inpData);
  }

  const drop_Handler = (event, data) => {
    data.value === "category" ? console.log("please choose a category") :
      inpData = {
        ...inpData, "category": data.value
      }
  }


  const addNoteHandler = () => {
    // console.log(inpData);
    dispatch(addNote(inpData));
  }

  const cancelNoteHandler = () => {
    dispatch(hideNote());
  }

  const updateNoteHandler = () =>{
    dispatch(updateNote(inpData));
  }

  // useEffect(() => {
  //   dispatch(fetchingCat());
  // }, []);

  const fetched_cats = useSelector(state => state.ui.categories);
  const update_note = useSelector(state => state.ui.update_note);
  const item = useSelector(state => state.ui.current_note_data);

  if(update_note){
    inpData = {
      "_id" : item._id,
      "title": item.title,
      "category": item.category,
      "content": item.content
    }
  }

  const categories = [
    {
      key: 'category',
      text: 'category',
      value: 'category'
    }];
  // make options table full with availble categories 
  fetched_cats.map((cat, i) => {
    categories.push({
      key: cat.name,
      text: cat.name,
      value: cat.name
    });
  })
  // CATEGORIES WOULD BE FETCHED FROM OUR REDUX STORE LATER
  // const categories = [
  //   { key: 'category', text: 'category', value: 'category' },
  //   { key: 'food', text: 'food', value: 'food' },
  //   { key: 'sport', text: 'sport', value: 'sport' },
  //   { key: 'javascript', text: 'javascript', value: 'javascript' },
  // ];



  return (
    <>
      <Message>
        <Message.Header>{update_note ? "Update Note" : "Add New Note"}</Message.Header>
        <Form>
          {
            update_note ?
              <>
                <Input
                  fluid
                  label={<Dropdown onChange={drop_Handler} defaultValue={item.category}  name={item.category} options={categories} />}
                  labelPosition='right'
                  placeholder='Title'
                  className={styles.mrgn}
                  onChange={inpHandler}
                  name="title"
                  defaultValue={item.title.toString()}
                />
                <TextArea onChange={inpHandler} defaultValue={item.content} name="content" className={`${styles.mrgn} ${styles.txt}`} placeholder='Tell us more' />

              </>
              :
              <>
                <Input
                  fluid
                  label={<Dropdown onChange={drop_Handler} defaultValue='category' name="category" options={categories} />}
                  labelPosition='right'
                  placeholder='Title'
                  className={styles.mrgn}
                  onChange={inpHandler}
                  name="title"
                  defaultValue=""
                />
                <TextArea onChange={inpHandler} defaultValue="" name="content" className={`${styles.mrgn} ${styles.txt}`} placeholder='Tell us more' />
              </>
          }

        </Form>

        <Button onClick={ update_note ? updateNoteHandler  : addNoteHandler} color='teal' >
          <Icon name='plus' size='small' />
          {update_note ? "Update Note" : "Add Note"}
        </Button>

        <Button color='red' onClick={cancelNoteHandler} >
          <Icon name='cancel' size='small' />
          Cancel
        </Button>

      </Message>
    </>
  );
}