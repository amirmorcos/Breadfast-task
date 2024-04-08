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
          models: './src/models',
          store: './src/store',
          api: './src/api',
          themes: './src/themes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
