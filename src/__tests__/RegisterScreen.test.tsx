import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterScreen from '../screens/RegisterScreen';


describe('RegisterScreen', () => {
  it('should render register screen correctly', () => {
    const { getByText, getByPlaceholderText } = render(<RegisterScreen navigation={{ navigate: jest.fn() }} />);
    
    expect(getByText('Register')).toBeTruthy();
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('should register a new user', () => {
    const navigateMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(<RegisterScreen navigation={{ navigate: navigateMock }} />);
    
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const registerButton = getByText('Register');
    
    fireEvent.changeText(usernameInput, 'newuser');
    fireEvent.changeText(passwordInput, 'newpassword');
    fireEvent.press(registerButton);

    expect(navigateMock).toHaveBeenCalledWith('Login');
  });
});
