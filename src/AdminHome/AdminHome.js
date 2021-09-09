import React from 'react';
import ManoboContext from '../ManoboContext';
import AdminClient from '../AdminClient/AdminClient';

class AdminHome extends React.Component {
    
    static contextType = ManoboContext;

    render() {
        
        const { clients=[] } = this.context;
        
        const clientList = clients.map(client => 
            <AdminClient 
                key={client.id}
                id={client.id}
                client={client}
            />)
        
        return(
            <div className='AdminHome'>
                {clientList}
            </div>
        );
    };


   

}

export default AdminHome;