module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  env: {
    production: {
      plugins: [
        ['react-native-reanimated/plugin', {strict: false}], // Disable strict mode
      ],
    },
  },
};
