/* JavaScript configuration file 
that allows you to use more advanced configuration options. 
It is typically used when you need to apply Babel transformations 
to multiple parts of your project, such as different directories or environments.*/
module.exports = function (api) {
    const presets = [
      ['@babel/preset-env', { modules: 'commonjs', }],
      '@babel/preset-react'
    ];
    const plugins = ['@babel/plugin-syntax-jsx'];
    api.cache(true);
    return {
      presets,
      plugins
    };
  };