import React from 'react';
import { render } from '@testing-library/react-native';
import { View, Text } from 'react-native';

test('renders a simple view', () => {
  const { getByText } = render(
    <View>
      <Text>Basic Render Test</Text>
    </View>
  );

  expect(getByText('Basic Render Test')).toBeTruthy();
});
