import React from 'react';
import Nav from './components/Nav'
import EventBriteContainer from './containers/EventBriteContainer'
import YelpContainer from './containers/YelpContainer'

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <EventBriteContainer/> */}
      {/* <Meetup/> */}
      <YelpContainer/>
    </div>
  );
}

export default App;
