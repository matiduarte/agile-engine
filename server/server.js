import express from 'express';
import bodyParser from 'body-parser';
import routes from './controllers';
import allowOrigin from './middleware/allow-origin';

const app = express();
const isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
  app.use(allowOrigin);
}

app.use(bodyParser.urlencoded({
  extended: true,
  verify(_req, res, buf) {
    const req = _req;
    req.rawBody = buf.toString();
  },
  limit: '50mb',
})).use(bodyParser.json({
  verify(_req, res, buf) {
    const req = _req;
    req.rawBody = buf.toString();
  },
  limit: '50mb',
})).use(bodyParser.raw({
  verify(_req, res, buf) {
    const req = _req;
    req.rawBody = buf.toString();
  },
  limit: '50mb',
})).use(routes);

function listen() {
  const port = process.env.PORT || 8080;
  return app.listen(port, () => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Ready! Listening on port ${port}`);
    }
  });
}

export default () => listen();
