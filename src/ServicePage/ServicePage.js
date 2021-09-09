import React from 'react';
import { Link } from 'react-router-dom';

class ServicePage extends React.Component {
    
    render() {
        return (
            <div className='ServicePage'>
                <header className='ServicePage__header'>
                    <h1>Services page</h1>
                </header>
                <section className='ServicePage__service-section'>
                    <div className='ServicePage__services'>
                        <div className='ServicePage__paid-traffic'>
                            <h2 className='ServicePage__service-title'>Paid traffic</h2>
                            <div className='ServicePage__service-desc'>
                                <p>Social media and Google ad strategies designed to convert both cold and warm leads into paying clients. These are highly targeted ads specifically tailored to your ideal clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className='ServicePage__services'>
                        <div className='ServicePage__funnel-building'>
                            <h2 className='ServicePage__service-title'>Funnel buildling</h2>
                            <div className='ServicePage__service-desc'>
                                <p>We work with brands to create or strengthen the journey of their ideal customer. We build funnels that convert cold leads into warm prospects who are actually looking to invest in your services.</p>
                            </div>
                        </div>
                   </div>
                   <div className='ServicePage__services'>
                       <div className='ServicePage__email-marketing'>
                           <h2 className='ServicePage__service-title'>Email Marketing</h2>
                           <div className='ServicePage__service-desc'>
                               <p>Not every lead will convert during their first experience with us. Email allows us to stay in front of your potential and existing clients, and to nurture them through to conversion.</p>
                           </div>
                       </div>
                   </div>
                </section>
                <section className='ServicePage__sign-up'>
                    <div className='ServicePage__sign-up-copy'>
                        <h3>Contact us to schedule your FREE company analysis today</h3>
                    </div>
                    <div className='ServicePage__sign-up-button-container'>
                       <Link to='/signup'>
                        Click here
                        </Link> 
                    </div>
                </section>
            </div>
        )    
    }
}

export default ServicePage;