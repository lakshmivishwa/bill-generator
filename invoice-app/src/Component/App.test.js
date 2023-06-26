
import { render, screen } from '@testing-library/react';
import App from "./App"

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

test("App component renders successfully", () => {
    
    
    store = mockStore(initialState);
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const element = screen.getByTestId("navbar-component");
    expect(element).toBeInTheDocument();
});