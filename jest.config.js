module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['./jest.setup.js'],
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|@react-native|@testing-library|react-native-paper|react-clone-referenced-element|expo-status-bar|expo)/)',
    ],
  };
  