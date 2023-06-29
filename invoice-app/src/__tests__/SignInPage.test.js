import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInPage from '../Component/SignInPage/signInForm';
import store from '../Redux/Store';
import { Provider } from 'react-redux';
import user from '@testing-library/user-event';

test('it shows two input', () => {
    render(
        <Provider store={store}>
            <SignInPage />
        </Provider>)
    // const inputs = screen.getAllByRole("textbox")
    // const button = screen.getByRole("button")
    // expect(inputs).toHaveLength(1);
    // expect(button).toBeInTheDocument();
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();

});

test('it calls onUserAdd when the form is submitted', () => {

    const mock = jest.fn();
    console.log(mock);
    // Try to render my component
    render(
        <Provider store={store}><SignInPage onUserAdd={mock} />
        </Provider>);

    // Find the two inputs
    const nameInput = screen.getByTestId('my-textbox1', {
        name: /email/i,
    });
    const passInput = screen.getByTestId('my-textbox', {
        name: /password/i,
    });

    // Simulate typing in a name
    user.click(nameInput);
    user.keyboard('jane');

    // Simulate typing in an email
    user.click(passInput);
    user.keyboard('123456');

    // Find the button
    const button = screen.getByRole('button');

    // Simulate clicking the button
    user.click(button);

    // Assertion to make sure 'onUserAdd' gets called with email/name
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'jane', pass: '123456' });
});

