const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pkg = require('./package.json');

const port = pkg.port;
const isProduction = (process.env.NODE_ENV === 'production');
const moduleName = 'home';

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
      },
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: moduleName,
      filename: 'remoteEntry.js',
      library: {
        name: moduleName, type: 'var'
      },
      remotes: {
        nav: 'nav',
        productImage: 'productImage',
        buyProduct: 'buyProduct'
      },
      exposes: {
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
};
