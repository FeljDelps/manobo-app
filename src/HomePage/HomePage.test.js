import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('Homempage compnent', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>,
            div);

        ReactDOM.unmountComponentAtNode(div);
    })
})