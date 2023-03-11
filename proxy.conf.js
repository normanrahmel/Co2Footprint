const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/translate",
    proxy({
      target: "https://translate.google.com",
      changeOrigin: true,
      pathRewrite: {
        "^/translate": "/translate_a/single",
      },
    })
  );
};
