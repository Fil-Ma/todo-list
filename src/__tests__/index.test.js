import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../app/App';
import Header from "../components/header/Header";

import { Provider } from 'react-redux';
import store from "../app/store";

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

// themed button
// search_bar
// todo
// todo list
// toolbar
// test redux
