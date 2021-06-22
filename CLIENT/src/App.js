import React, { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Home from './components/home';
import { fetchingNotes,fetchingCat  } from './redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingNotes());
    dispatch(fetchingCat());
  }, []);
  return (
    <>
      <Home/>
    </>
  );
}

export default App;

