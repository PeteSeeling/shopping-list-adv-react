import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import App from './App';

describe('Testing app behavior', () => {

    it('Should display default items', () => {
        render(
        <MemoryRouter>
            <App />
            </MemoryRouter>
        );
    })
})