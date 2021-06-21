import React from 'react';
import MainMenu from './MainMenu';
import { Grid , Message, Container } from 'semantic-ui-react';
import NewNote from './newNote';
import NewCategory from './newCategory';
import ItemsList from './itemsList';
import {useSelector} from 'react-redux';

export default function Home({ _ }) {  
  const showNote = useSelector(state => state.ui.showNote);
  const showCat = useSelector(state => state.ui.showCat);
  return (
    <>
      <Grid>
        <Grid.Column width={3}   verticalAlign='top'>
          <MainMenu />
        </Grid.Column>
        <Grid.Column width={12}  verticalAlign='top'>
          <Message
            icon='spotify'
            header='NOTES APP'
            content='Stay updated and never forget !'
          />
          <Container></Container>
          {/* in store we have showNewNote , showNewCategory to know what to render */}
          {  showNote  && <NewNote />}
          {  showCat &&  <NewCategory/>}
          <ItemsList/>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
    </>
  )
}