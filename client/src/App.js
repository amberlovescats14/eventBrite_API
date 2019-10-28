import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Layout/Nav'
import EventBriteContainer from './containers/EventBriteContainer'
import YelpContainer from './containers/YelpContainer'
import Nav2 from './components/Layout/Nav2'
import Router from './Router'

function App() {
  return (
    <BrowserRouter>
    <Fragment>
      <Router/>
      <Nav2/>
      {/* <EventBriteContainer/> */}
      {/* <Meetup/> */}
      <YelpContainer/>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
