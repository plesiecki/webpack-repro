/** @type {import('webpack').Configuration} */
module.exports = [{
  resolve: {
    extensions: ['.tsx', '...'],
  },
  externals: [

    async ({ context, request, contextInfo, getResolve }) => {
      const resolve = getResolve();
      // To resolve with ResolveRequest data object
      // first apply patch on node_modules/webpack/lib/ExternalModuleFactoryPlugin.js, line 286
      // according to https://github.com/webpack/webpack/pull/19307/files
      const result = await resolve(context, request);
      console.log({result});
    }
  ],
  bail: true,
  target: ['web'],
  mode: 'production',
}]