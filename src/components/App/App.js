import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import PublicPage_MapView from '../../routes/PublicPage_MapView/PublicPage_MapView'
import PublicPage_ListView from '../../routes/PublicPage_ListView/PublicPage_ListView'
import PersonalPage_MapView from '../../routes/PersonalPage_MapView/PersonalPage_MapView'
import PersonalPage_ListView from '../../routes/PersonalPage_ListView/PersonalPage_LisView'
import LogPage from '../../routes/LogPage/LogPage'
//import LoginPage from '../../routes/LoginPage/LoginPage'
//import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

//import Footer from '../Footer/Footer';
//import './App.css'


class App extends Component {

  state = { 
    hasError: false 
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return(
      < >
        <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
        {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          {
            <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              exact
              path={'/public/mapview'}
              component={PublicPage_MapView}
            />
            <Route
              exact
              path={'/public/listview'}
              component={PublicPage_ListView}
            />
            <Route
              exact
              path={'/mylogs/mapview'}
              component={PersonalPage_MapView}
            /> 
            <Route
              exact
              path={'/mylogs/listview'}
              component={PersonalPage_ListView}
            />
            <Route
              exact
              path={'/logs/:id'}
              component={LogPage}
            /> 
            <Route
              component={NotFoundPage}
            />
            </Switch>
          }
        </main>        
      </div>
      </>     
    )
  }
}

export default App;
