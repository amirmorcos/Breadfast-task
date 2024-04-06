module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          screens: './src/screens',
          navigation: './src/navigation',
          redux: './src/redux',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
