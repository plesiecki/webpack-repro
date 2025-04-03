const webpack = require('webpack');

const compiler = webpack(require('./webpack.config.js'));

compiler.run((err, stats) => {
    console.log('run', err, stats?.hasErrors(), stats?.toString());
});