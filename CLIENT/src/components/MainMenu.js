import React, { useState } from 'react';
import { Label, Menu, Button, Icon, Divider ,Dropdown } from 'semantic-ui-react';
import styles from './styles/MainMenu.module.css';
import {useSelector , useDispatch} from 'react-redux';
import {showNote,showCat} from '../redux/actions/actions';


export default function MainMenu({ _ }) {
  /* REDUX */
  const dispatch = useDispatch();

  /* LOCAL STATE */
  const [activeItem, setActiveItem] = useState("inbox");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }
 
  /* HANDLERS (DIPATCHING ACTIONS ...) */
  const newNoteHandler = ()=>{
    dispatch(showNote());
  }

  const newCatHandler = ()=>{
    dispatch(showCat());
  }

  const notes_count = useSelector(state => state.ui.notes).length;
  const cat_count = useSelector(state => state.ui.categories).length;


  return (
    <>
      <Menu size='large' fixed vertical >
        <Menu.Item
          name='inbox'
          active={activeItem === 'inbox'}
          onClick={handleItemClick} >
          <Label color='teal'>{notes_count}</Label>
          All Notes
      </Menu.Item>

        <Menu.Item
          name='spam'
          active={activeItem === 'spam'}
          onClick={handleItemClick}>
          <Label color="blue">{cat_count}</Label>
          Available Categories
      </Menu.Item>
          <Dropdown text='Show by Category' pointing='left' fluid className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>Sport <strong>(10)</strong></Dropdown.Item>
              <Dropdown.Item>Food <strong>(23)</strong></Dropdown.Item>
              <Dropdown.Item>Javascript <strong>(350)</strong></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        <Divider horizontal>Controls</Divider>
        <Menu.Item>
          <Button color="teal" fluid className={styles.btn} onClick={newNoteHandler}>
            <Icon name="add"></Icon>
            Add new Note
        </Button>
          <Button color="twitter" fluid className={styles.btn} onClick={newCatHandler}>
            <Icon name="add"></Icon>
            Add new Category
        </Button>
        </Menu.Item>
      </Menu>
    </>
  )
}