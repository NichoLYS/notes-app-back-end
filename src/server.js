const Hapi = require('@hapi/hapi');
const notes = require('./notes.js');
const routes = require('./routes.js');
const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server ini berjalan pada${server.info.uri}`);
};
init();


