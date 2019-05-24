import React, {Component} from 'react';
import PrivateRoute from '../components/PrivateRoute'
import {Route, Switch} from 'react-router-dom'

// import './App.css'
// import './assets/font/iconfont.css'

import Home from '../page/home'
import Login from '../page/sys/login'

class AppRouter extends Component {
  render() {
    return (<Switch>
      <Route path='/login' component={Login}/>
    <Route path='/' component={Home}/>
      {/* <PrivateRoute path='/' component={Home}/> */}
    </Switch>);
  }
}

export default AppRouter;
