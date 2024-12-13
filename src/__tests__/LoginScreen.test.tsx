import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';

describe('LoginScreen', () => {
  it('should render login screen correctly', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen navigation={{ navigate: jest.fn() }} />);
    
    expect(getByText('Library')).toBeTruthy();
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('should show error for invalid credentials', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen navigation={{ navigate: jest.fn() }} />);
    
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
    
    fireEvent.changeText(usernameInput, 'wronguser');
    fireEvent.changeText(passwordInput, 'wrongpassword');
    fireEvent.press(loginButton);
    
    expect(getByText('Invalid credentials')).toBeTruthy();
  });
});
