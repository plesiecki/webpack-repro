/** @type {import('webpack').Configuration} */
module.exports = [{
  resolve: {
    extensions: ['.tsx', '...'],
  },
  externals: [
    ({ context, request, contextInfo, getResolve }) => {
      const resolve = getResolve();
      return new Promise(r => {
        resolve(context, request, function resolveCallback(err, request, THE_THIRD_PARAM_THE_DATA) {
          console.log({err, request, THE_THIRD_PARAM_THE_DATA});
          r();
        });
      })
    }
  ],
  bail: true,
  target: ['web'],
  mode: 'production',
}]