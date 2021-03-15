module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-uses-vars': 'error',
    'import/order': 'error',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'no-shadow': 'off',
    'react/no-unescaped-entities': 'off',
    'react-native/no-inline-styles': 'off',
    'react/prop-types': 'off',
    radix: 'off',
  },
  settings: {
    react: {
      version: '16.13.1',
    },
  },
  globals: {
    setTimeout: false,
    clearInterval: false,
    setInterval: false,
    process: false,
    FormData: false,
    window: false,
  },
}
