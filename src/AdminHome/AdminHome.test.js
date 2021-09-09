import React from 'react';
import ReactDOM from 'react-dom';
import AdminHome from './AdminHome';

describe('AdminHome component', () => {
    it('renders without crashing', () => {
        
        const clients = [{"id": "1", "name": "test name", "email": "test email", "phone": "test phone", "comment": "test comment"}]
        
        const div = document.createElement('div');

        ReactDOM.render(<AdminHome clients={clients}/>, div);

        ReactDOM.unmountComponentAtNode(div);
    });
})
