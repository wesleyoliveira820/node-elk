const Server = require('./server');

function bootstrap() {
  const server = new Server();

  server.app.listen(3334);
}

bootstrap();
