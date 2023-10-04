module.exports = {
  default: {
    name: 'product',
    exposes: {
      './Module': './src/remote-entry.ts',
    },
  }
};
