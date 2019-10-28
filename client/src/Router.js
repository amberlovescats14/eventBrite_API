import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Eventbrite from './components/EventBrite'
import Meetup from './components/Meetup'
import Yelp from './components/Yelp'

const Router = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={Landing}/>
      <Route exact strict path='/eventbrite' component={Eventbrite}/>
      <Route exact strict path='/meetup' component={Meetup}/>
      <Route exact strict path='/yelp' component={Yelp}/>
    </Switch>
  )
}

export default Router
