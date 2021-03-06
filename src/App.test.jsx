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
        screen.getByText(/Beef/i)
        screen.getByText(/Fish/i)
        screen.getByText(/Tuna/i)
    });

    it('add one new item to the list', () => {
        render(
        <MemoryRouter>
            <App />
            </MemoryRouter>
        );

        const itemInput = screen.getByPlaceholderText(/Add New Item Here/i);
        userEvent.type(itemInput, 'beans');

        const submitButton = screen.getByText(/Add New Item/i)
        userEvent.click(submitButton)
        screen.getByText(/beans/i)
});

it('should delete a list item', () => {
    render(
    <MemoryRouter>
        <App />
        </MemoryRouter>
    );
    const tunaButton = screen.getByLabelText(/tuna-delete/i)
    userEvent.click(tunaButton)
 expect(screen.queryByText(/tuna/i)).not.toBeInTheDocument()
});

it('should edit a list item', () => {
    render(
    <MemoryRouter>
        <App />
        </MemoryRouter>
    );

const tunaButton = screen.getByLabelText(/tuna-edit/i);
userEvent.click(tunaButton);

const tunaField = screen.getByLabelText(/tuna-field/i);
userEvent.type(tunaField, 'bagels');

const submitChangeButton = screen.getByLabelText(/submit item change/i);
userEvent.click(submitChangeButton);

screen.findByText(/bagels/i);
})
})