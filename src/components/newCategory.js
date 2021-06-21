import React from 'react';
import { Message, Form, Input, Dropdown, Button, Icon } from 'semantic-ui-react';
import styles from './styles/newCategory.module.css';
import {useDispatch} from 'react-redux';
import {hideCat} from '../redux/actions/actions';

export default function NewCategory({ _ }) {
  /* REDUX */
    const dispatch = useDispatch();
  /* HANDLERS */
  const cancelCatHandler = ()=>{
    dispatch(hideCat());
  }
  return (
    <>
      <Message>
        <Message.Header>Add New Category</Message.Header>
        <Form>
          <Input
            fluid
            labelPosition='right'
            placeholder='Category Name'
            className={styles.mrgn}
          />
        </Form>
        
        <Button color='teal' >
          <Icon name='plus' size='small' />
          Add Category
        </Button>

        <Button color='red' onClick={cancelCatHandler}>
          <Icon name='cancel' size='small' />
          Cancel
        </Button>

      </Message>
    </>
  );
}