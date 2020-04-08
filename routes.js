// import Routes from 'next-routes';

// const routes = new Routes();

// routes 
//   .add('about', 'about')
//   .add('post', 'dev/blog/:id')
//   .add('postEdit', 'dev/edit/:id')
//   .add('write', 'write')

// export default routes;

const routes = module.exports = require('next-routes')()
routes
  .add('home', '/')
  .add('about', '/about')
  .add('post', 'dev/blog/:id')
  .add('postEdit', 'dev/edit/:id')
  .add('write', 'write')
// export default routes;