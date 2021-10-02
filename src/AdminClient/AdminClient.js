import React from 'react';

class AdminClient extends React.Component {
    render() {
        return(
            <div className='AdminClient'>
                <div className='AdminClient__content'>
                    <h3 className='AdminClient__name'>{this.props.lead.lead_name}</h3>
                    <div className='AdminClient__phone'>Phone:  {this.props.lead.phone}</div>
                    <div className='AdminClient__email'>Email: {this.props.lead.email}</div>
                    {this.props.lead.comment && (<div className='AdminClient__comment'>Comment: {this.props.lead.comment}</div>)}
                </div>
            </div>
        );
    };
}

AdminClient.defaultProps = {
    lead: {}
}

export default AdminClient;