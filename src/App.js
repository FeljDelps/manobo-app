import React from 'react';
import { Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import HomePage from './HomePage/HomePage';
import ServicePage from './ServicePage/ServicePage';
import SignupForm from './SignupForm/SignupForm';
import AdminLogin from './AdminLogin/AdminLogin';
import AdminHome from './AdminHome/AdminHome';
import ManoboContext from './ManoboContext';
import { dummyStore } from './dummy-store';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: []
    }
  }
  
  
  componentDidMount() {
    //Fake API call 
    setTimeout(() => this.setState(dummyStore))
  }

  addClient = client => {
    this.setState({
      clients: [...this.state.clients, client]
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
      clients: this.state.clients,
      addClient: this.addClient
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
