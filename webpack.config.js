const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development', // Ou 'production', dependendo do ambiente
  entry: './src/main.js', // Caminho para o arquivo principal do Vue
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Nome do arquivo gerado
    clean: true, // Limpa o diretório 'dist' antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // Processa arquivos .vue
        loader: 'vue-loader',
      },
      {
        test: /\.css$/, // Processa arquivos .css
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Processa imagens
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
      {
        test: /\.(js|mjs|cjs)$/, // Processa arquivos JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js', // Garante que o Vue seja referenciado corretamente
    },
    extensions: ['.js', '.vue', '.json'], // Extensões reconhecidas pelo Webpack
    fallback: {
      // Configuração de polyfills para módulos Node.js
      path: require.resolve('path-browserify'),
      fs: require.resolve('browserify-fs'),
    },
  },
  devtool: 'inline-source-map', // Facilita o debug no modo desenvolvimento
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true, // Habilita hot-reload
    port: 8080, // Porta do servidor
  },
  plugins: [
    new VueLoaderPlugin(), // Habilita o Vue Loader
  ],
};
