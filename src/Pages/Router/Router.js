import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Home from '../Home/Home'
import Login from '../Login/Login'
import SelectedAds from '../SelectedAds/SelectedAds'
import PostAd from '../postAd/postAd'
import PostAd2 from '../postAd/postAd2'
import Adcongrat from '../adcongrats/adcongrats'
import Adpreview from '../Adpreview/Adpreview'

class Routerfile extends Component {


  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={props => <Home {...props} />}
          />

          <Route
            exact
            path='/Login'
            render={props => <Login {...props} />}
          />
          <Route
            exact
            path='/SelectedAds'
            render={props => <SelectedAds {...props} />}
          />
          <Route
            exact
            path='/postAd'
            render={props => <PostAd {...props} />}
          />
          <Route
            exact
            path='/postAd2'
            render={props => <PostAd2 {...props} />}
          />
          <Route
            exact
            path='/adcongrat'
            render={props => <Adcongrat {...props} />}
          />
          <Route
            exact
            path='/adpreview'
            render={props => <Adpreview {...props} />}
          />
        </Switch>
      </Router>
    )
  }
}
export default Routerfile
