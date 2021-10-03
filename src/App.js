import React from 'react';
import config from './config';
import { Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import HomePage from './HomePage/HomePage';
import ServicePage from './ServicePage/ServicePage';
import SignupForm from './SignupForm/SignupForm';
import AdminLogin from './AdminLogin/AdminLogin';
import AdminHome from './AdminHome/AdminHome';
import ManoboContext from './ManoboContext';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leads: []
    }
  }
  
  setLeads = leads => {
    this.setState({
      leads,
      error: null
    })
  }
  
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/leads`, {
      method:'GET',
      headers: {
        'content-type':'application/json'
      }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setLeads)
      .catch(error => this.setState({ error }))
  }

  addLead = lead => {
    this.setState({
      leads: [...this.state.leads, lead]
    })
  }
  
  renderMainRoutes() {

    return (
      <>
        <Route 
          exact
          path='/'
          component={LandingPage}
        />

        <Route 
          path='/homepage'
          component={HomePage}
        />

        <Route 
          path='/services'
          component={ServicePage}
        />

        <Route 
          path='/signup'
          component={SignupForm}
        />

        <Route 
          path='/admin-login'
          component={AdminLogin}
        />

        <Route 
          path='/admin-home'
          component={AdminHome}
        />
      </>
    )
    
    
  }
  
  render() {
    
    const contextValue = {
      leads: this.state.leads,
      addLead: this.addLead
    }

    return (
      <main className='App'>
        <ManoboContext.Provider value={contextValue}>
          <nav className='App__nav'><h2>Nav bar</h2></nav>
          <header className='App__header'>
            <h1>
              <Link className='App__header_link' to='/homepage'>Manobo App</Link>
            </h1>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
          <footer className='App_footer'><h2>Footer</h2></footer>
        </ManoboContext.Provider>
      </main>
    );
  }
}

export default App;
