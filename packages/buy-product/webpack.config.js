const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pkg = require('./package.json');

const deps = pkg.dependencies
const port = pkg.port;
const isProduction = (process.env.NODE_ENV === 'production');
const moduleName = 'buyProduct';

module.exports = {
  entry: './src/index',
  cache: false,

  mode: isProduction ? 'production' : 'development',
  ...(isProduction && { devtool: 'source-map' }),

  devServer: {
    historyApiFallback: true,
    port: port,
  },

  optimization: {
    minimize: isProduction
  },

  output: {
    publicPath: `http://localhost:${port}/`
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')]
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: moduleName,
      library: {
        name: moduleName, type: 'var'
      },
      filename: `${moduleName}_remoteEntry.js`,
      remotes: {
        core: 'core',
      },
      exposes: {
        './BuyProduct': './src/bootstrap'
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
        ...deps
      }
    }),
  ]
};
