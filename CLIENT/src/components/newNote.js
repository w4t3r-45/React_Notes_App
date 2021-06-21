import React from 'react';
import { Message, Form, TextArea, Input, Dropdown, Button, Icon } from 'semantic-ui-react';
import styles from './styles/newNote.module.css';
import {hideNote} from '../redux/actions/actions';
import {useDispatch} from 'react-redux';

export default function NewNote({ _ }) {
  // CATEGORIES WOULD BE FETCHED FROM OUR REDUX STORE LATER
  const categories = [
    { key: 'category', text: 'category', value: 'category' },
    { key: 'food', text: 'food', value: 'food' },
    { key: 'sport', text: 'sport', value: 'sport' },
    { key: 'javascript', text: 'javascript', value: 'javascript' },
  ];

  /* REDUX */
  const dispatch = useDispatch();

  /* HANDLERS */
  const cancelNoteHandler = ()=>{
    dispatch(hideNote());
  }


  return (
    <>
      <Message>
        <Message.Header>Add New Note</Message.Header>
        <Form>
          <Input
            fluid
            label={<Dropdown defaultValue='category' options={categories} />}
            labelPosition='right'
            placeholder='Title'
            className={styles.mrgn}
          />
          <TextArea className={`${styles.mrgn} ${styles.txt}`} placeholder='Tell us more' />
        </Form>
        
        <Button color='teal' >
          <Icon name='plus' size='small' />
          Add Note
        </Button>

        <Button color='red' onClick={cancelNoteHandler} >
          <Icon name='cancel' size='small' />
          Cancel
        </Button>

      </Message>
    </>
  );
}