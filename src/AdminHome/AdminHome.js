import React from 'react';
import AdminClient from '../AdminClient/AdminClient';

class AdminHome extends React.Component {
    render() {
        return(
            <div className='AdminHome'>
                {this.props.clients.map((client) => (
                    <AdminClient 
                        key={client.id}
                        id={client.id}
                        client={client}/>
                ))}
            </div>
        );
    };
}

export default AdminHome;