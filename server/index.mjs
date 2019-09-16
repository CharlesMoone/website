import Koa from 'koa';
import http from 'http';
import path from 'path';
import mongoose from 'mongoose';
import bodyparser from 'koa-bodyparser';
import compress from 'koa-compress';
import serve from 'koa-static';

import keys from './utils/keys.mjs';
import code from './utils/code.mjs';
import { logger } from './utils/logger.mjs';

import staticRouter from './routers/staticRouter.mjs';

mongoose.connect('mongodb://localhost:27017/website', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = new Koa();

app.kyes = keys;

app.use(bodyparser());
app.use(compress({ threshold: 2048 }));
app.use(serve(path.resolve('static')));

app.use(staticRouter.routes());

app.on('error', (err, ctx) => {
  logger.error(err);
  [ctx.status, ctx.body] = code.SERVERERROR;
});

http.createServer(app.callback()).listen(8888);
