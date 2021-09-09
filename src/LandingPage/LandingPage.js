import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    render() {

        return (
            <div className='LandingPage'>
                <header className='LandingPage__header'>
                    <h1>Landing Page</h1>
                </header>
                <section className='LandingPage__section'>
                    This is the Manobo app.  It is for small businesses that want to increase their sales through online marketing
                </section>
                <div className='LandingPage__button-container'>
                    <Link to='/homepage'>
                        Click here
                    </Link>
                </div>
            </div>
        );
    }
}

export default LandingPage;