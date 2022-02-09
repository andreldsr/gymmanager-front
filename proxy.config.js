const proxy = [
    {
      context: '/api',
      target: 'http://gymmanagerandreldsr.herokuapp.com',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;