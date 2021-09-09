import React from 'react';
import ReactDOM from 'react-dom';
import AdminClient from './AdminClient';

describe('AdminClient component', () => {
    it('renders without crashing', () => {

        const div = document.createElement('div');
        
        const props = {"name":"test name", "email":"test email", "phone":"test phone", "comment": "test comment"}

        ReactDOM.render(<AdminClient client={props}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})