const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

const port = process.env.PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-template-curly-in-string
  console.log("Server is running on ${port}");
});
