import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../app/App';
import Header from "../components/header/Header";

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const initialState = { 
    todos: { 
        todos: [
            {
                id: 101,
                text: "Write some code",
                completed: true
            },
            {
                id: 102,
                text: "Add some styling",
                completed: true
            },
            {
                id: 103,
                text: "Deploy",
                completed: false
            },
        ],
        visibilityFilter: "SHOW_ALL",
    }
 };
const mockStore = configureStore();
let store = mockStore(initialState);

test('App renders correctly', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

})

test('Header component renders correctly', () => {
    render(<Header />)
    expect(screen.getByRole("heading")).toHaveTextContent("To Do App");
    expect(screen.getByRole("button")).toBeInTheDocument();
})
