import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route} from 'react-router-dom'
import Nav from './components/Layout/Nav'
import EventBriteContainer from './containers/EventBriteContainer'
import Yelp from './containers/YelpContainer'
import Nav2 from './components/Layout/Nav2'
import Landing from './components/Landing'

function App() {
  return (
    <BrowserRouter>
      <Nav2>
      <Switch>
        <Route exact strict path='/' component={Landing}/>
        <Route exact strict path='/eventbrite' component={EventBriteContainer}/>
        <Route exact strict path='/yelp' component={Yelp}/>
    </Switch>
      </Nav2>
      {/* <YelpContainer/> */}
    </BrowserRouter>
  );
}

export default App;
