import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProfileList from '../pages/ProfileList'
import ViewUser from '../pages/SingleUser'
import NotFound from '../pages/NotFound'
import TestPage from '../pages/TestPage'

const PageRoutes = () => {
    
    return (
      <>
        <Switch>
          <Route exact path="/" component={ProfileList}/>
          <Route path="users/:username" component={ViewUser} />
          <Route path="/explore" component={TestPage} />
          <Route component={NotFound} />
        </Switch>
      </>
  )
}

export default PageRoutes