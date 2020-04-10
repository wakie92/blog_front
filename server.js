// import Routes from './routes';

const express = require('express');
const path = require('path');
const next = require('next');
const routes = require('./routes');
const port = parseInt(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/../next`},
});
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(handle);
  server.get("*", (req, res) => {
    return handler(req, res)
  })
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on blog running port:${port}`);
  });
});