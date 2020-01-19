const path = require('path');
const {
  override,
  useEslintRc,
  addBabelPlugins,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  useEslintRc('./.eslintrc.json'),
  ...addBabelPlugins('lodash'),
  addWebpackAlias({
    '@assets': path.resolve(__dirname, 'src/assets/'),
    '@api': path.resolve(__dirname, 'src/api/index.ts'),
    '@actions': path.resolve(__dirname, 'src/redux/actions/index.ts'),
    '@constants': path.resolve(__dirname, 'src/config/constants/index.ts'),
    '@paths': path.resolve(__dirname, 'src/config/paths/index.ts'),
    '@data': path.resolve(__dirname, 'src/data/index.ts'),
    '@utils': path.resolve(__dirname, 'src/lib/utils/index.ts'),
    '@resources': path.resolve(__dirname, 'src/lib/resources/index.ts'),
    '@validations': path.resolve(__dirname, 'src/lib/validations/index.ts'),
    '@pages': path.resolve(__dirname, 'src/pages/index.ts'),
    '@templates': path.resolve(__dirname, 'src/templates/index.ts'),
    '@components': path.resolve(__dirname, 'src/components/index.ts'),
    styles: path.resolve(__dirname, 'src/styles/'),
  })
);
