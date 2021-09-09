import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render() {
        return(
            <div className='HomePage'>
                <header className='HomePage__header'>
                    <h1>Homepage</h1>
                </header>
                <section className='Homepage__why'>
                   <p>Your business offers personal, customized services that larger brands simply can't replicate. But larger companies have the time and money to spread their brand name and advertise to potential clients - time and money you can't afford to part with. That's where we come in. Kdot Media specializes in helping small to mid sized companies compete with bigger brands on the digital landscape. We work with you to create and execute digital marketing strategies that save you time and get you more, higher paying members.</p>
                </section>
                <section className='Homepage__services'>
                    <h2>
                        Learn about the services we offer and how we can help you increase your online awareness
                    </h2>
                    <div className='Homepage__button-container'>
                        <Link to='/services'>
                            Click here
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;