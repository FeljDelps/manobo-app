import React from 'react';
import ManoboContext from '../ManoboContext';
import AdminClient from '../AdminClient/AdminClient';

class AdminHome extends React.Component {
    
    static contextType = ManoboContext;

    render() {
        
        const { leads=[] } = this.context;
        
        const leadList = leads.map(lead => 
            <AdminClient 
                key={lead.id}
                id={lead.id}
                lead={lead}
            />)
        
        return(
            <div className='AdminHome'>
                {leadList}
            </div>
        );
    };


   

}

export default AdminHome;