module.exports = {
  plugins: [
    require("postcss-import")(),
    require("postcss-nested")(),
    require("autoprefixer")(),
    require("cssnano")({
      reduceIdents: false
    }),
    require("postcss-reporter")({
      clearMessages: true
    })
  ]
};
