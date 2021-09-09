import React from 'react';
import ReactDOM from 'react-dom';
import ServicePage from './ServicePage';
import { BrowserRouter } from 'react-router-dom';

describe('ServicePage component', () => {
    it('renders without crashing', () => {

        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <ServicePage />
            </BrowserRouter>, 
            div);
    });
})