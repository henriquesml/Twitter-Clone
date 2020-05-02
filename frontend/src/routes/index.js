import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import TimeLine from '../pages/TimeLine'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn}/>
      <Route path="/register" exact component={SignUp}/>
      <Route path="/timeline" isPrivate exact component={TimeLine}/>
      <Route path="/" isUndefined component={SignIn}/>
    </Switch>
  )
}