import React, { useEffect } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { fetchingNotes, showNote } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import {deleteNote,updateNote_set_item} from '../redux/actions/actions'; 
export default function ItemsList({ _ }) {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchingNotes());
  // }, []);

  const notes = useSelector(state => state.ui.notes);

  // HANDLERS

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  }

  const handleUpdate = (item) =>{

    dispatch(showNote());
    dispatch(updateNote_set_item(item));
    console.log(item);
  }


  return (
    <>
      <Card.Group stackable itemsPerRow={4}>
        {
          notes.map((item, i) => (
            <Card key={item._id}>
              <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>{item.category}</Card.Meta>
                <Card.Description>
                  {item.content}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button onClick={() => handleUpdate(item)} basic color='green'>
                    <Icon name='edit' />
                    Update
                 </Button>
                  <Button onClick={() => handleDelete(item._id)} basic color='red'>
                    <Icon name='remove' />
                    Delete
                 </Button>
                </div>
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>
    </>
  )
}