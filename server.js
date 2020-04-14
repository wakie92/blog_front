// import Routes from './routes';

const express = require('express');
const path = require('path');
const next = require('next');
const routes = require('./routes');
const port = parseInt(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get("*", (req, res) => {
    return handle(req, res)
  })
  server.listen(port, err => {
    if (err) throw err;
    console.log(`${path.relative(process.cwd(), __dirname)}/.next, ${__dirname}`)
    console.log(`> Ready on blog running port:${port}`);
  });
});