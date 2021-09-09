import React from 'react';

class AdminClient extends React.Component {
    render() {
        return(
            <div className='AdminClient'>
                <div className='AdminClient__content'>
                    <h3 className='AdminClient__name'>{this.props.client.name}</h3>
                    <div className='AdminClient__phone'>Phone:  {this.props.client.phone}</div>
                    <div className='AdminClient__email'>Email: {this.props.client.email}</div>
                    {this.props.client.comment && (<div className='AdminClient__comment'>Comment: {this.props.client.comment}</div>)}
                </div>
            </div>
        );
    };
}

export default AdminClient;